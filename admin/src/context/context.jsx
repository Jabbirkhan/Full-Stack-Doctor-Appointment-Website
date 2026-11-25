import { createContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "./../utils/axiosInstance.js";
import Loader from "./../components/loader";

export const Context = createContext();

const ContextProvider = (props) => {

    const navigate = useNavigate();
    const currency = '$';
    const [appointments, setAppointments] = useState([]);
    const [doctorAppointments, setDoctorAppointments] = useState([]);
    const [doctorProfile, setDoctorProfile] = useState({});
    const [auth, setAuth] = useState({
        status: 'checking',
        role: null
    });

    const verifyAuth = async () => {
        try {

            const adminRes = await axiosInstance.get('/api/v1/admin/verify');

            if (adminRes.data.success) {
                setAuth({
                    status: 'authenticated',
                    role: adminRes.data.role
                });
                return;
            }

        } catch (err) { }

        try {

            const doctorRes = await axiosInstance.get('/api/v1/doctor/verify');

            if (doctorRes.data.success) {
                setAuth({
                    status: 'authenticated',
                    role: doctorRes.data.role
                });
                return;
            }

        } catch (err) { }

        setAuth({
            status: 'unauthenticated',
            role: null
        });
    };

    useEffect(()=>{
        verifyAuth();
    },[]);
    
    const fetchAllAppointments = async () => {
        try {
            const response = await axiosInstance.get(`/api/v1/admin/appointments`);
            if(response.data.success){
                setAppointments(response.data.appointments);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    }

    useEffect(()=>{
        if(auth.status === 'authenticated' && auth.role === 'admin'){
            fetchAllAppointments();
        }
    },[auth]);

    const fetchDoctorAppointments = async () => {
        try {
            const response = await axiosInstance.get(`/api/v1/doctor/appointments`);
            if(response.data.success){
                setDoctorAppointments(response.data.appointments);
            }
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }

    useEffect(()=> {
        if(auth.status === 'authenticated' && auth.role === 'doctor'){
            fetchDoctorAppointments();
        }
    },[auth]);
    
    const fetchDoctorProfile = async () => {
        try {
            const response = await axiosInstance.get(`/api/v1/doctor/profile`);
            if(response.data.success){
                setDoctorProfile(response.data.doctorProfile);
            }
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }

    useEffect(()=> {
        if(auth.status === 'authenticated' && auth.role === 'doctor'){
            fetchDoctorProfile();
        }
    },[auth]);

    const value = useMemo(() => ({
        navigate, currency,
        auth, setAuth,
        doctorProfile, appointments,
        doctorAppointments, fetchDoctorAppointments,
    }), [auth, doctorAppointments, doctorProfile]);

    return (
        <>
            <Context.Provider value={value}>
                {props.children}
            </Context.Provider>
        </>
    )
}

export default ContextProvider