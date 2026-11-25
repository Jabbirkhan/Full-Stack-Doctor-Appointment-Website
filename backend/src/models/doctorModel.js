import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    speciality: {
        type: String,
        required: true,
    },
    degree: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    available: {
        type: Boolean,
        default: true,
    },
    fees: {
        type: Number,
        required: true,
    },
    address: {
        type: Object,
        required: true,
    },
    slots_booked: {
        type: Object,
        default: {},
    },
    verifyResetOtp: {
        type: String,
        default: ''
    },
    resetOtpExpiresAt: {
        type: Date,
        default: null
    }
}, { timestamps: true });

export const Doctor = mongoose.models.Doctor || mongoose.model("Doctor", doctorSchema);