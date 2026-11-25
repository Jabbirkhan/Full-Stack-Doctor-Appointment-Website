import { Router } from "express";
import {
    adminLogin, adminRegister, logoutAdmin, resetPassword, sendResetPasswordOtp,
    verifyAdmin, verifyResetPasswordOtp
} from "../controllers/adminControllers.js";
import upload from "./../middlewares/multer.js";
import adminAuth from "../middlewares/adminAuth.js";
import { addDoctor, allDoctors, deleteDoctor } from "../controllers/doctorController.js";
import { allAppointments } from "../controllers/appointmentController.js";

const adminRouter = Router();

adminRouter.route('/register').post(adminRegister);
adminRouter.route('/login').post(adminLogin);
adminRouter.route('/verify').get(adminAuth, verifyAdmin);
adminRouter.route('/logout').post(logoutAdmin);

adminRouter.route('/send-reset-password-otp').post(sendResetPasswordOtp);
adminRouter.route('/verify-reset-password-otp').post(verifyResetPasswordOtp);
adminRouter.route('/reset-password').post(resetPassword);

adminRouter.route('/adddoctor').post(adminAuth, upload.single('image'), addDoctor);
adminRouter.route('/doctors').get(adminAuth, allDoctors);
adminRouter.route('/deletedoctor/:id').delete(adminAuth, deleteDoctor);

adminRouter.route('/appointments').get(adminAuth, allAppointments);

export default adminRouter;