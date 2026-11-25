import { Router } from "express";
import {
    getProfile, handleGithubCallback, handleGoogleCallback, resetPassword, sendContactMessage, sendResetPasswordOtp,
    sendVerifyEmailOtp, updateProfile, userLogin, userLogout, userRegistration, userVerify, verifyEmailOtp, verifyResetPasswordOtp
} from "../controllers/userControllers.js";
import passport from "passport";
import userAuth from "./../middlewares/userAuth.js";
import upload from "./../middlewares/multer.js";
import { allDoctors } from "../controllers/doctorController.js";
import { bookAppointment, bookStripeAppointment, userAppointments, userCancelAppointments, verifyStripePayment } from "../controllers/appointmentController.js";

const userRouter = Router();

userRouter.route('/register').post(userRegistration);
userRouter.route('/login').post(userLogin);
userRouter.route('/verify').get(userAuth, userVerify);
userRouter.route('/logout').post(userLogout);

userRouter.route('/send-verify-email-otp').get(userAuth, sendVerifyEmailOtp);
userRouter.route('/verify-email-otp').post(userAuth, verifyEmailOtp);
userRouter.route('/send-reset-password-otp').post(sendResetPasswordOtp);
userRouter.route('/verify-reset-password-otp').post(verifyResetPasswordOtp);
userRouter.route('/reset-password').post(resetPassword);

userRouter.route("/send-contact-message").post(userAuth, sendContactMessage);

userRouter.route('/profile').get(userAuth, getProfile);
userRouter.route('/updateprofile').patch(userAuth, upload.single("avatar"), updateProfile);

userRouter.route('/doctors').get(userAuth, allDoctors);

userRouter.route('/bookappointment').post(userAuth, bookAppointment);
userRouter.route('/book-stripe-appointment').post(userAuth, bookStripeAppointment);
userRouter.route('/verify-stripe-payment').post(userAuth, verifyStripePayment);
userRouter.route('/appointments').get(userAuth, userAppointments);
userRouter.route('/cancelappointment/:id').patch(userAuth, userCancelAppointments);

// Google and GitHub authentication routes (for production, without state parameter)
userRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] })); // state: true allows us to pass the origin in the query
userRouter.get('/github', passport.authenticate('github', { scope: ['user:email'] })); // state: true allows us to pass the origin in the query

// Callback routes for Google and GitHub authentication
userRouter.get('/google/callback', passport.authenticate('google', { session: false}), handleGoogleCallback); // http://localhost:8008/api/v1/user/google/callback
userRouter.get('/github/callback', passport.authenticate('github', { session: false}), handleGithubCallback); // http://localhost:8008/api/v1/user/github/callback

export default userRouter;