import { Appointment } from "../models/appointmentModel.js";
import { Doctor } from "../models/doctorModel.js";
import { User } from "../models/userModel.js";
// 1. Import the Stripe library
import Stripe from "stripe";

// 2. stripe initialization
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173"; // Replace with your frontend URL

// global variables
const currency = 'USD'

const bookAppointment = async (req, res) => {
    try {
        const { id, slotDate, slotTime, paymentMethod } = req.body;
        if (!slotDate || !slotTime) {
            return res.status(400).json({ success: false, message: "Please provide slot date and time" });
        }

        if (!paymentMethod) {
            return res.status(400).json({ success: false, message: "Please choose payment method" });
        }

        const userData = await User.findById(req.user._id);
        if (!userData) {
            return res.status(400).json({ success: false, message: "User data is missing" });
        }
        const docData = await Doctor.findById(id);
        if (!docData) {
            return res.status(400).json({ success: false, message: "Doctor data is missing" });
        }

        if (!docData.available) {
            return res.status(400).json({ success: false, message: "Doctor is not available" });
        }

        const appointment = await Appointment.create({
            userId: req.user._id,
            docId: id,
            slotDate,
            slotTime,
            userData,
            docData,
            amount: docData.fees,
            paymentMethod,
            // cancelled: false, // it have a default value false in schema
            // payment: false, // it have a default value false in schema
            // isCompleted: false, // it have a default value false in schema
        });

        if (!appointment) {
            return res.status(400).json({ success: false, message: "Failed to book appointment" });
        }

        return res.status(201).json({ success: true, message: "Appointment booked successfully", appointment });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

const createStripeSession = async (appointment) => {
    // Stripe Checkout's line_items must be an array
    // each line item must include a quantity
    const line_items = appointment.map((item) => ({
        price_data: {
            currency: currency,
            product_data: {
                name: item.name,
            },
            unit_amount: Math.round(Number(item.fees) * 100),
        },
        quantity: 1,
    }));

    return stripe.checkout.sessions.create(
        {
            mode: "payment",
            line_items,
            success_url: `${frontendUrl}/verify?success=true&appointmentId=${appointment._id}`,
            cancel_url: `${frontendUrl}/verify?canceled=true&appointmentId=${appointment._id}`,
            // Metadata for the Checkout Session.
            metadata: {
                appointmentId: appointment._id.toString(),
                userId: req.user._id.toString(),
            },
            // Metadata for the PaymentIntent used by our webhook.
            payment_intent_data: {
                metadata: {
                    appointmentId: appointment._id.toString(),
                    userId: req.user._id.toString(),
                },
            },
        },
        {
            idempotencyKey: `checkout-session-${appointment._id}`,
        }
    );
};

const bookStripeAppointment = async (req, res) => {
    try {
        const userId = req.user._id;
        const { id, slotDate, slotTime, paymentMethod, idempotencyKey } = req.body;
        if (!slotDate || !slotTime) {
            return res.status(400).json({ success: false, message: "Please provide slot date and time" });
        }

        if (!paymentMethod) {
            return res.status(400).json({ success: false, message: "Please choose payment method" });
        }

        if (!idempotencyKey) {
            return res.status(400).json({ success: false, message: "A valid idempotency UUID is required" });
        }

        const existingAppointment = await Appointment.findOne({
            userId,
            idempotencyKey,
        });

        if (existingAppointment) {
            const session = await createStripeSession(existingAppointment);
            return res.status(200).json({ success: true, session_url: session.url });
        }

        const userData = await User.findById(req.user._id);
        if (!userData) {
            return res.status(400).json({ success: false, message: "User data is missing" });
        }
        const docData = await Doctor.findById(id);
        if (!docData) {
            return res.status(400).json({ success: false, message: "Doctor data is missing" });
        }

        if (!docData.available) {
            return res.status(400).json({ success: false, message: "Doctor is not available" });
        }

        const appointment = await Appointment.create({
            userId: req.user._id,
            docId: id,
            slotDate,
            slotTime,
            userData,
            docData,
            amount: docData.fees,
            paymentMethod,
            idempotencyKey,
            // cancelled: false, // it have a default value false in schema
            // payment: false, // it have a default value false in schema
            // isCompleted: false, // it have a default value false in schema
        });

        if (!appointment) {
            return res.status(400).json({ success: false, message: "Failed to book appointment" });
        }

        const session = await createStripeSession(appointment);

        return res.status(200).json({ success: true, message: "Appointment booked successfully", session_url: session.url });

    } catch (error) {
        if (error.code === 11000 && idempotencyKey) {
            const userId = req.user._id;
            const existingAppointment = await Appointment.findOne({
                userId,
                idempotencyKey,
            });

            if (existingAppointment) {
                try {
                    const session = await createStripeSession(existingAppointment);
                    return res.status(200).json({ success: true, session_url: session.url });
                } catch (sessionError) {
                    console.error("Stripe session retry failed:", sessionError);
                }
            }
        }

        return res.status(500).json({ success: false, message: error.message });
    }
}

const handlePaymentIntent = async (paymentIntentId, payment) => {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    const { appointmentId, userId } = paymentIntent.metadata;
    if (!appointmentId || !userId) {
        return res.json({ success: false, message: "Payment metadata is missing" });
    }
    const appointment = await Appointment.findOne({
        _id: appointmentId,
        userId,
    });
    if (!appointment) {
        return res.json({ success: false, message: "Appointment not found" });
    }
    // Never mark an appointment paid unless Stripe confirms it.
    if (payment && paymentIntent.status !== "succeeded") {
        return res.json({ success: false, message: "Payment is not successfull" });
    }
    if (payment && (paymentIntent.currency !== currency || paymentIntent.amount_received !== Math.round(appointment.amount * 100))) {
        return res.json({ success: false, message: "Payment amount or currency mismatch" });
    }
    // Never downgrade a paid order.
    if (appointment.payment) {
        return;
    }
    appointment.payment = payment;
    await appointment.save();
};

const stripeWebhook = async (req, res) => {
    const signature = req.headers["stripe-signature"]; // we get the signature when stripe send post request

    let event;
    try {
        event = stripe.webhooks.constructEvent(
            req.body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (error) {
        console.error("Invalid Stripe webhook:", error.message);
        return res.status(400).send("Invalid webhook signature");
    }
    try {
        switch (event.type) {
            case "payment_intent.succeeded":
                await handlePaymentIntent(event.data.object.id, true);
                break;
            case "payment_intent.payment_failed":
            case "payment_intent.canceled":
                await handlePaymentIntent(event.data.object.id, false);
                break;
            default:
                break;
        }
        return res.status(200).json({ received: true });
    } catch (error) {
        console.error("Stripe webhook processing error:", error);
        // Stripe can retry events after a server error.
        return res.status(500).json({ received: false });
    }
};

// 7. Verify the payment
const verifyStripePayment = async (req, res) => {
    try {
        const { appointmentId } = req.query;
        const userId = req.user._id;

        const appointment = await Appointment.findOne({
            _id: appointmentId,
            userId,
        });
        if (!appointment) {
            return res.status(404).json({ success: false, message: "Appointment not found" });
        }

        if (!appointment.payment) {
            return res.status(200).json({ success: false, payment: false, message: "Payment is pending confirmation. Please check again shortly." });
        }

        return res.status(200).json({ success: true, payment: true, message: "Payment successful and appointment placed" });

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

const userAppointments = async (req, res) => {
    try {
        const id = req.user._id;
        const appointments = await Appointment.find({ userId: id });
        if (!appointments) {
            return res.status(404).json({ success: false, message: "Appointments are not found" });
        }
        return res.status(200).json({ success: true, appointments });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

const doctorAppointments = async (req, res) => {
    try {
        const id = req.doctor._id;
        const appointments = await Appointment.find({ docId: id });
        return res.status(200).json({ success: true, appointments });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

const allAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        return res.status(200).json({ success: true, appointments });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

const userCancelAppointments = async (req, res) => {
    try {
        const id = req.params.id;
        const appointment = await Appointment.findById(id);
        if (!appointment) {
            return res.status(404).json({ success: false, message: "Appointment not found" });
        }
        if (appointment) {
            appointment.status = 'Cancelled';
            appointment.cancelled = true;
        }
        await appointment.save();
        return res.status(200).json({ success: true, message: "Appointment cancelled successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

const changeStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const id = req.params.id;
        const appointment = await Appointment.findById(id);
        if (!appointment) {
            return res.status(404).json({ success: false, message: "Appointment not found" });
        }

        if (status === 'Pending') appointment.status = status;
        if (status === 'Confirmed') appointment.status = status;
        if (status === 'Cancelled') {
            appointment.status = status;
            appointment.cancelled = true;
        }
        if (status === 'Completed') {
            appointment.status = status;
            appointment.isCompleted = true;
            appointment.payment = true;
        }

        await appointment.save();

        return res.status(200).json({ success: true, message: "Status updated successfully", updatedStatus: appointment });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

export {
    bookAppointment,
    userAppointments,
    doctorAppointments,
    allAppointments,
    userCancelAppointments,
    changeStatus,
    bookStripeAppointment,
    verifyStripePayment,
    stripeWebhook
}