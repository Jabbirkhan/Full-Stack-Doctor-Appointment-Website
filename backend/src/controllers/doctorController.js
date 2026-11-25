import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import uploadOnCloundinary from "../utils/cloudinary.js";
import { Doctor } from "../models/doctorModel.js";
import transporter from "./../config/nodeMailer.js";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
}

const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, experience, degree, about, fees, address } = req.body;
        if (!name || !email || !password || !speciality || !experience || !degree || !about || !fees) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        let parsedAddress = address;

        try {
            parsedAddress =
                typeof address === "string"
                    ? JSON.parse(address || "{}")
                    : address || {};
        } catch (err) {
            return res.status(400).json({ success: false, message: "Invalid address format" });
        }

        const { line1, line2 } = parsedAddress;
        if (!line1 || !line2) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Invalid email format" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const imagePath = req.file ? req.file.path : null;
        if (!imagePath) {
            return res.status(400).json({ success: false, message: "Doctor image is required" });
        }
        const uploadImage = await uploadOnCloundinary(imagePath);

        const doctor = await Doctor.create({
            name,
            email,
            password: hashedPassword,
            image: uploadImage.secure_url,
            speciality,
            experience,
            degree,
            about,
            fees,
            address: parsedAddress,
        });

        const newDoctor = await Doctor.findById(doctor._id).select("-password");
        if (!newDoctor) {
            return res.status(500).json({ success: false, message: "Error while creating doctor" });
        }
        return res.status(201).json({ success: true, message: "Doctor created successfully", doctor: newDoctor });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

const allDoctors = async (req, res) => {
    try {
        let page = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 1;
        const search = req.query.search || null;
        const sortBy = req.query.sort || null;
        const experience = req.query.experience || null;

        if (page < 1) page = 1;
        if (limit < 1) limit = 1;

        const skip = (page - 1) * limit;

        const filter = {};

        const category = req.query.category ?
            Array.isArray(req.query.category) ?
                req.query.category :
                [req.query.category] : [];

        if (search) filter.name = { $regex: search, $options: 'i' };
        if (category.length > 0) filter.speciality = { $in: category };


        let sort = { createdAt: -1 };
        if (sortBy === 'Low-High') sort = { fees: 1 };
        if (sortBy === 'High-Low') sort = { fees: -1 };

        if (experience) {
            switch (experience) {
                case "0-5":
                    filter.experience = { $gte: 0, $lte: 5 };
                    break;

                case "5-10":
                    filter.experience = { $gte: 5, $lte: 10 };
                    break;

                case "10-15":
                    filter.experience = { $gte: 10, $lte: 15 };
                    break;

                case "15":
                    filter.experience = { $gt: 15 };
                    break;
            }
        }

        const doctors = await Doctor.find(filter).sort(sort).skip(skip).limit(limit);
        const specialities = await Doctor.distinct('speciality');
        const newDoctors = await Doctor.find().sort({ createdAt: -1 }).limit(10);
        const totalDoctors = await Doctor.countDocuments(filter);
        const totalPages = Math.ceil(totalDoctors / limit);

        const experienceStats = await Doctor.aggregate([
            { $match: filter },
            {
                $group: {
                    _id: null,
                    avgExperience: { $avg: "$experience" }
                }
            }
        ]);

        const avgExperience = Math.round(
            experienceStats[0]?.avgExperience || 0
        );

        return res.status(200).json({
            success: true,
            avgExperience,
            doctors, specialities, newDoctors, totalDoctors, totalPages, currentPage: page
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

const doctorLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Email and password are required" });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Invalid email format" });
        }

        const doctor = await Doctor.findOne({ email });
        if (!doctor) {
            return res.status(404).json({ success: false, message: "Doctor not found" });
        }

        const isMatch = await bcrypt.compare(password, doctor.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        const doctorToken = createToken(doctor._id);

        const option = {
            httpOnly: true,
            // secure: process.env.NODE_ENV === "production", // Set secure flag in production
            secure: false, // Set secure flag in production
            sameSite: "lax", // Prevent CSRF attacks
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        }

        return res.status(200)
            .cookie("doctorToken", doctorToken, option)
            .json({ success: true, message: "Login successful", doctor, role: "doctor" });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

const doctorLogout = async (req, res) => {
    try {
        res.clearCookie("doctorToken", {
            httpOnly: true,
            secure: false,
            sameSite: "lax"
        });
        return res.status(200).json({ success: true, message: "Logout successful" });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

const doctorVerify = async (req, res) => {
    try {
        return res.status(200).json({ success: true, message: "Doctor is verified.", role: "doctor" });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

const getProfile = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.doctor._id).select("-password");
        if (!doctor) {
            return res.status(404).json({ success: false, message: "Doctor not found" });
        }
        return res.status(200).json({ success: true, doctorProfile: doctor });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

const updateProfile = async (req, res) => {
    try {
        const { name, email, speciality, experience, degree, about, fees, address } = req.body;
        let parsedAddress = address;

        try {
            parsedAddress =
                typeof address === "string"
                    ? JSON.parse(address || "{}")
                    : address || {};
        } catch (err) {
            return res.status(400).json({ success: false, message: "Invalid address format" });
        }

        const doctor = await Doctor.findById(req.doctor._id);
        if (!doctor) {
            return res.status(404).json({ success: false, message: "Doctor not found" });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Invalid email format" });
        }

        const imagePath = req.file ? req.file.path : null;

        let finalImage = doctor.image; // Default to existing image if no new image is uploaded
        if (imagePath) {
            const publicId = doctor.image.split('/').pop().split('.')[0]; // Extract public ID from the existing image URL
            await cloudinary.uploader.destroy(publicId); // Delete the existing image from Cloudinary

            const uploadImage = await uploadOnCloundinary(imagePath);
            finalImage = uploadImage.secure_url; // Get the secure URL of the newly uploaded image
        }

        doctor.image = finalImage;
        if (name) doctor.name = name;
        if (email) doctor.email = email;
        if (speciality) doctor.speciality = speciality;
        if (experience) doctor.experience = experience;
        if (degree) doctor.degree = degree;
        if (about) doctor.about = about;
        if (fees) doctor.fees = fees;
        if (address) doctor.address = parsedAddress;

        await doctor.save();

        return res.status(200).json({ success: true, message: "Profile updated successfully", updatedProfile: doctor });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

const changeAvailability = async (req, res) => {
    try {
        const { available } = req.body;
        const doctor = await Doctor.findById(req.doctor._id);

        if (!doctor) {
            return res.status(404).json({ success: false, message: "Doctor not found" });
        }
        const updatedDoctor = await Doctor.findByIdAndUpdate(req.doctor._id, { available }, { new: true }).select("-password");

        return res.status(200).json({ success: true, message: "Availability updated successfully", doctor: updatedDoctor });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

const deleteDoctor = async (req, res) => {
    try {
        const id = req.params.id;
        const doctor = await Doctor.findById(id);
        if (!doctor) {
            return res.status(404).json({ success: false, message: "Doctor not found" });
        }

        if (doctor.image) {
            const publicId = doctor.image.split('/').pop().split('.')[0];
            await cloudinary.uploader.destroy(publicId); // Delete the doctor's image from Cloudinary
        }

        await Doctor.findByIdAndDelete(id);
        return res.status(200).json({ success: true, message: "Doctor deleted successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

// Send OTP to reset password
const sendResetPasswordOtp = async (req, res) => {
  try {
    const { email } = req.body;
    const doctor = await Doctor.findOne({ email });
    if (!doctor) {
      return res.status(404).json({ success: false, message: "doctor not found!" });
    }
    
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a random 6-digit OTP

    doctor.verifyResetOtp = otp;
    doctor.resetOtpExpiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes
    await doctor.save();

    const emailOption = {
      from: process.env.SENDER_EMAIL,
      to: doctor.email,
      subject: "Reset password OTP from LMS",
      text: `Your OTP for reset password is this ${otp}`,
    };

    await transporter.sendMail(emailOption);

    return res.status(200).json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

// Verify OTP to reset password
const verifyResetPasswordOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({ success: false, message: "OTP is required" });
    }
    const doctor = await Doctor.findOne({email});
    if (!doctor) {
      return res.status(404).json({ success: false, message: "doctor not found" });
    }
    if (!doctor.resetOtpExpiresAt || Date.now() > doctor.resetOtpExpiresAt.getTime()) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }
    if(doctor.verifyResetOtp === '' || doctor.verifyResetOtp !== otp){
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }
    
    return res.status(200).json({ success: true, message: "OTP verified successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

// doctor can reset password
const resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;
    if (!newPassword || !email || !otp) {
      return res.status(400).json({ success: false, message: "Email, Otp and password are required!" });
    }
    const doctor = await Doctor.findOne({email});
    if (!doctor) {
      return res.status(404).json({ success: false, message: "doctor not found" });
    }

    if (!doctor.resetOtpExpiresAt || Date.now() > doctor.resetOtpExpiresAt.getTime()) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }
    if(doctor.verifyResetOtp === '' || doctor.verifyResetOtp !== otp){
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    doctor.password = hashedPassword;

    doctor.verifyResetOtp = "";
    doctor.resetOtpExpiresAt = null;

    await doctor.save();
    
    return res.status(200).json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export {
    addDoctor,
    allDoctors,
    doctorLogin,
    doctorLogout,
    doctorVerify,
    getProfile,
    updateProfile,
    changeAvailability,
    deleteDoctor,
    sendResetPasswordOtp, verifyResetPasswordOtp, resetPassword,
};