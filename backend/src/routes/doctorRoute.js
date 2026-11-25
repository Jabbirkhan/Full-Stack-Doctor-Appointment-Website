import { Router } from "express";
import { changeAvailability, doctorLogin, doctorLogout, doctorVerify, getProfile, resetPassword, sendResetPasswordOtp, updateProfile, verifyResetPasswordOtp } from "../controllers/doctorController.js";
import doctorAuth from "./../middlewares/doctorAuth.js";
import { changeStatus, doctorAppointments } from "../controllers/appointmentController.js";
import upload from "./../middlewares/multer.js";

const doctorRouter = Router();

doctorRouter.route('/login').post(doctorLogin);
doctorRouter.route('/verify').get(doctorAuth, doctorVerify);
doctorRouter.route('/logout').post(doctorLogout);

doctorRouter.route('/send-reset-password-otp').post(sendResetPasswordOtp);
doctorRouter.route('/verify-reset-password-otp').post(verifyResetPasswordOtp);
doctorRouter.route('/reset-password').post(resetPassword);

doctorRouter.route('/profile').get(doctorAuth, getProfile);
doctorRouter.route('/updateprofile/:id').patch(doctorAuth, upload.single('image'), updateProfile);

doctorRouter.route('/change-availability').patch(doctorAuth, changeAvailability);

doctorRouter.route('/appointments').get(doctorAuth, doctorAppointments);
doctorRouter.route('/change-status/:id').patch(doctorAuth, changeStatus);

export default doctorRouter;