import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    docId: {
        type: String,
        required: true,
    },
    slotDate: {
        type: String,
        required: true,
    },
    slotTime: {
        type: String,
        required: true,
    },
    userData: {
        type: Object,
        required: true,
    },
    docData: {
        type: Object,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    cancelled: {
        type: Boolean,
        default: false,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    status: {
        type: String,
        default: "Pending"
    },
    paymentMethod: {
        type: String,
        required: true,  
    },
    payment: {
        type: Boolean,
        default: false,
    },
    idempotencyKey: {
        type: String,
        required: function () {
            return this.paymentMethod === "stripe";
        }, // This field is required only for Stripe payments
    },
}, { timestamps: true });

appointmentSchema.index(
  { userId: 1, idempotencyKey: 1 },
  {
    unique: true,
    partialFilterExpression: {
      idempotencyKey: { $type: "string" },
    },
  }
);

export const Appointment = mongoose.models.appointment || mongoose.model('Appointment', appointmentSchema);