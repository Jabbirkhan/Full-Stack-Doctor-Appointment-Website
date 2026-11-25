import jwt from "jsonwebtoken";
import { Doctor } from "../models/doctorModel.js";

const doctorAuth = async (req, res, next) => {
    try {
        let token;
        if(req.cookies?.doctorToken){
            token = req.cookies.doctorToken;
        }
        if(!token){
            return res.status(401).json({success: false, message: 'Unauthorized'});
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const doctor = await Doctor.findById(decodedToken.id).select("-password");
        req.doctor = doctor
        next();
    } catch (error) {
        return res.status(401).json({success: false, message: 'Unauthorized'});
    }
}

export default doctorAuth;