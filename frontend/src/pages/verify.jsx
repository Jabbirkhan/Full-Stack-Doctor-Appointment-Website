import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Context } from '../context/context';
import axiosInstance from '../utils/axiosInstance.js';

const Verify = () => {

  const { navigate, authState, appointments } = useContext(Context);

  // 5. Here we get the query parameters that backend send
  const queryParams = new URLSearchParams(window.location.search);
  const success = queryParams.get('success');
  const canceled = queryParams.get('canceled');
  const appointmentId = queryParams.get('appointmentId');

  // 6. Here we verify the payment status by sending a request to backend with orderId and success query parameters, backend will verify the payment status and update the order status in database, and also clear the cart data in user profile if payment is successful
  const verifyPayment = async () => {
    try {
      if (authState === 'unauthenticated') {
        navigate('/login');
        return;
      }

      if (canceled === "true" || !appointmentId) {
        navigate("/doctors");
        window.location.reload();
        return;
      }

      const response = await axiosInstance.post(`/api/v1/user/verify-stripe-payment?appointmentId=${appointmentId}`);
      if (response.data.payment) {
        toast.success(response.data.message);
        navigate('/appointment');
        appointments();
      } else {
        toast.error(response.data.message || "Unable to verify payment");
        navigate('/doctors');
        window.location.reload();
      }

    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  }

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div>
      Payment verify page
    </div>
  )
}

export default Verify
