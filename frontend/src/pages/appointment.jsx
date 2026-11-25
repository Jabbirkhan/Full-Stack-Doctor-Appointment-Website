import React, { useContext, useEffect, useMemo, useState } from "react";
import { FaSearch, FaCalendarAlt, FaClock, FaMoneyBillWave, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
// import { appointments } from "../assets/assets.js";
import { Context } from "./../context/context";
import { debounce } from 'lodash';
import { toast } from "react-toastify";
import axiosInstance from "../utils/axiosInstance.js";

const Appointment = () => {
  const { currency, appointments, userAppointments, authState, navigate } = useContext(Context);

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const handleSearch = useMemo(() =>
    debounce((text) => {
      setSearch(text);
    }, 1000), []
  );

  useEffect(() => {
    return () => {
      handleSearch.cancel();
    }
  }, [handleSearch]);

  const filteredAppointments = useMemo(() => {
    return appointments.filter((item) => {
      const doctorName = item.docData.name.toLowerCase().includes(search.toLowerCase());
      const speciality = item.docData.speciality.toLowerCase().includes(search.toLowerCase());

      const searchMatch = doctorName || speciality;

      if (filter === "All") return searchMatch;

      if (filter === "Pending")
        return (item.status === 'Pending' && searchMatch);

      if (filter === "Confirmed")
        return (item.status === 'Confirmed' && searchMatch);

      if (filter === "Cancelled")
        return (item.status === 'Cancelled' && item.cancelled && searchMatch);

      if (filter === "Completed")
        return (item.status === 'Completed' && item.isCompleted && searchMatch);

      return true;
    });
  }, [filter, search, appointments]);

  const handleTrackAppointment = () => {
    userAppointments();
  }

  const cancelAppointment = async (id) => {
    try {
      if(authState !== 'authenticated'){
        return navigate('/login');
      }

      const response = await axiosInstance.patch(`/api/v1/user/cancelappointment/${id}`);
      if(response.data.success){
        toast.success(response.data.message);
        userAppointments();
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            My Appointments
          </h1>

          <p className="text-slate-500 mt-2">
            Manage your appointments and payments.
          </p>
        </div>

        {/* Filters */}

        <div className="flex flex-col lg:flex-row gap-4 justify-between mb-10">

          <div className="flex flex-wrap gap-2">

            {["All", "Pending", "Confirmed", "Cancelled", "Completed"].map((item) => (
              <button key={item} onClick={() => setFilter(item)}
                className={`px-5 py-2 rounded-md font-medium transition-all
                ${filter === item
                    ? "bg-violet-600 text-white"
                    : "bg-white border border-slate-200 hover:bg-slate-100"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Search */}

          <div className="relative w-full lg:w-96">

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

            <input type="text" placeholder="Search doctors or specialties"
              className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {filteredAppointments.map((item) => {
            return (
              <div
                key={item._id}
                className={`bg-white border-l-4 
                  ${item.status === 'Pending' ? 'border-gray-600' :
                    item.status === 'Confirmed' ? 'border-green-600' :
                      item.status === 'Cancelled' ? 'border-red-600' :
                        item.status === 'Completed' ? 'border-violet-600' : ''}
                rounded-3xl p-6 shadow-lg hover:-translate-y-1
                hover:shadow-2xl transition-all duration-300`}
              >
                {/* Top */}

                <div className="flex justify-between gap-3">

                  <div className="flex gap-4">

                    <img
                      src={item.docData.image}
                      alt={item.docData.name}
                      className={`w-16 h-16 rounded-full object-cover ${item.cancelled
                          ? "grayscale"
                          : ""
                        }`}
                    />

                    <div>
                      <h3 className="font-semibold text-lg">
                        {item.docData.name}
                      </h3>

                      <p className="text-cyan-600 text-sm uppercase tracking-wider">
                        {item.docData.speciality}
                      </p>

                      <p className="text-xs text-slate-500 mt-1">
                        {item.docData.experience}
                      </p>
                    </div>
                  </div>

                  <span className={`h-fit px-3 py-1 rounded-full text-xs font-semibold 
                  ${item.status === 'Pending' ? 'bg-gray-100 text-gray-600' :
                      item.status === 'Confirmed' ? 'bg-green-100 text-green-600' :
                        item.status === 'Cancelled' ? 'bg-red-100 text-red-600' :
                          item.status === 'Completed' ? 'bg-violet-100 text-violet-600' :
                            ''
                    }`}>
                    {item.status}
                  </span>
                </div>

                {/* Details */}

                <div className="bg-slate-100 rounded-xl p-4 mt-5 space-y-3">

                  <div className="flex items-center gap-3 text-slate-600">
                    <FaCalendarAlt />
                    <span>{item.slotDate}</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-600">
                    <FaClock />
                    <span>{item.slotTime}</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-600">
                    <FaMoneyBillWave />
                    <span>{currency}{item.docData.fees}</span>
                  </div>
                </div>

                {/* Payment Status */}

                <div className="mt-4 flex items-center gap-2">

                  {item.isCompleted || item.payment === true ? (
                    <>
                      <FaCheckCircle className="text-green-500" />
                      <span className="text-green-600 text-sm font-medium">
                        Paid
                      </span>
                    </>
                  ) : (
                    <>
                      <FaTimesCircle className="text-red-500" />
                      <span className="text-red-600 text-sm font-medium">
                        Unpaid
                      </span>
                    </>
                  )}
                </div>

                {/* Actions */}

                <div className="flex gap-3 mt-5">

                  <button 
                          onClick={handleTrackAppointment}
                          className={`flex-1 rounded-xl py-2.5 font-medium 
                          ${item.isCompleted ? 'bg-violet-100 text-violet-600 cursor-not-allowed' :
                          item.cancelled ? 'bg-red-100 text-red-600 cursor-not-allowed' : 'bg--gray-100 cursor-pointer border border-gray-300 hover:bg-gray-200'}`}
                          disabled={item.isCompleted && item.cancelled}
                  >
                    {item.isCompleted ? 'Completed' : item.cancelled ? 'Cancelled' : 'Track Appointment'}
                  </button>

                  {!item.isCompleted && !item.cancelled && 
                  <button onClick={()=>cancelAppointment(item._id)} className="border border-red-300 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all duration-200 cursor-pointer px-4">
                    Cancel
                  </button>}

                  {/* {item.isCompleted && (
                    <button className={`w-full ${item.status === 'Completed' ? 'bg-violet-100 text-violet-600' : ''} rounded-xl py-2.5 font-medium cursor-not-allowed`}>
                      {item.status}
                    </button>
                  )}

                  {item.cancelled && (
                    <button className={`w-full ${item.status === 'Cancelled' ? 'bg-red-100 text-red-600' : ''} rounded-xl py-2.5 font-medium cursor-not-allowed`}>
                      {item.status}
                    </button>
                  )} */}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default Appointment;