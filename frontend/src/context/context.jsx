import { createContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "./../utils/axiosInstance.js";

export const Context = createContext();

const ContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const navigate = useNavigate();
    const currency = '$';
    const [authState, setAuthState] = useState('checking');
    const [doctors, setDoctors] = useState([]);
    const [appointments, setAppointments] = useState([])
    const [userProfile, setUserProfile] = useState({});

    const verifyUser = async () => {
        try {
            const response = await axiosInstance.get(`/api/v1/user/verify`);
            if(response.data.success){
                setAuthState('authenticated');
            }
        } catch (error) {
            setAuthState('unauthenticated');
            if(error.response.status !== 401){
                toast.error(error.response?.data?.message);
            }
        }
    }

    useEffect(()=>{
        verifyUser();
    },[]);

    const fetchDoctors = async () => {
        try {
            const response = await axiosInstance.get(`/api/v1/user/doctors`);
            if(response.data.success){
                setDoctors(response.data.newDoctors);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    }

    useEffect(()=>{
        if(authState === 'authenticated'){
            fetchDoctors();
        }
    },[authState]);

    const userAppointments = async () => {
        try {
            const response = await axiosInstance.get(`/api/v1/user/appointments`);
            if(response.data.success){
                setAppointments(response.data.appointments);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    }

    useEffect(()=>{
        if(authState === 'authenticated'){
            userAppointments()
        }
    },[authState]);

    const fetchUserProfile = async () => {
        try {
            const response = await axiosInstance.get(`/api/v1/user/profile`);
            if(response.data.success){
                setUserProfile(response.data.userProfile);
            }
        } catch (error) {
            toast.error(error.response?.data.message);
        }
    }

    useEffect(()=>{
        if(authState === 'authenticated'){
            fetchUserProfile();
        }
    },[authState]);

    const value = useMemo(()=> ({
        navigate, currency, backendUrl,
        authState, setAuthState,
        doctors, setDoctors, appointments, userAppointments,
        userProfile, setUserProfile, fetchUserProfile,
    }),[authState, doctors, appointments, userProfile]);

    return (
        <>
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
        </>
    )
}

export default ContextProvider