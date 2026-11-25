import { FaBell, FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";
import { useContext, useState } from "react";
import { Context } from "../../context/context.jsx";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance.js";
import { useEffect } from "react";

const DoctorAppointments = () => {
  const { auth, currency, doctorAppointments, fetchDoctorAppointments } = useContext(Context);

  const [newStatus, setNewStatus] = useState("");
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

  const handleSelectChange = (id, value) => {
    setSelectedAppointmentId(id);
    setNewStatus(value);
  };

  const totalAppointments = doctorAppointments.length;

  const completedAppointments = doctorAppointments.filter(
    (item) => item.isCompleted
  ).length;

  const pendingAppointments = doctorAppointments.filter(
    (item) => !item.isCompleted && !item.cancelled
  ).length;

  const totalRevenue = doctorAppointments.filter((item) => item.payment).reduce((sum, item) => sum + item.amount, 0);

  const updateStatus = async () => {
    try {
      if (auth.status !== 'authenticated' && auth.role !== 'doctor') {
        return navigate('/login');
      }

      if (!selectedAppointmentId || !newStatus) return;

      const response = await axiosInstance.patch(`/api/v1/doctor/change-status/${selectedAppointmentId}`, { status: newStatus });
      if (response.data.success) {
        toast.success(response.data.message);
        fetchDoctorAppointments();
        setSelectedAppointmentId(null);
        setNewStatus("");
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">

      <main className="min-h-screen w-full p-4 md:p-6 pb-24 lg:pb-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">
              Welcome, Dr. Wilson
            </h1>

            <p className="text-gray-500">
              Here's what's happening with your practice today.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white px-4 py-2 rounded-full shadow flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Online
            </div>

            <button className="bg-white w-12 h-12 rounded-full shadow flex items-center justify-center">
              <FaBell />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="bg-white p-5 rounded-2xl shadow">
            <p className="text-gray-500">Total Appointments</p>
            <h3 className="text-3xl font-bold mt-2">
              {totalAppointments}
            </h3>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow">
            <p className="text-gray-500">Completed</p>
            <h3 className="text-3xl font-bold text-green-600 mt-2">
              {completedAppointments}
            </h3>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow">
            <p className="text-gray-500">Pending</p>
            <h3 className="text-3xl font-bold text-yellow-500 mt-2">
              {pendingAppointments}
            </h3>
          </div>

          <div className="bg-violet-600 text-white p-5 rounded-2xl shadow">
            <p>Total Revenue</p>
            <h3 className="text-3xl font-bold mt-2">
              {currency}{totalRevenue.toLocaleString()}
            </h3>
          </div>
        </div>

        {/* Appointments Table */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <div className="p-5 border-b">
            <h2 className="text-xl font-semibold">
              Appointments
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-225">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-4">Patient</th>
                  <th className="text-left p-4">Doctor</th>
                  <th className="text-left p-4">Date</th>
                  <th className="text-left p-4">Time</th>
                  <th className="text-left p-4">Amount</th>
                  <th className="text-left p-4">Payment</th>
                  <th className="text-left p-4">Status</th>
                </tr>
              </thead>

              <tbody>
                {doctorAppointments.map((appointment) => (
                  <tr
                    key={appointment._id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-4">
                      <div>
                        <p className="font-medium">
                          {appointment.userData.name}
                        </p>
                      </div>
                    </td>

                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={appointment.docData.image}
                          alt={appointment.docData.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />

                        <span>
                          {appointment.docData.name}
                        </span>
                      </div>
                    </td>

                    <td className="p-4">
                      {appointment.slotDate.replaceAll("_", "/")}
                    </td>

                    <td className="p-4">
                      {appointment.slotTime}
                    </td>

                    <td className="p-4">
                      {currency}{appointment.amount}
                    </td>

                    <td className="p-4">
                      {appointment.isCompleted ? (
                        <span className="text-green-600 font-medium">
                          Paid
                        </span>
                      ) : (
                        <span className="text-red-500 font-medium">
                          Unpaid
                        </span>
                      )}
                    </td>

                    <td className="p-4">
                      <select
                        value={selectedAppointmentId === appointment._id ? newStatus : appointment.status}
                        onChange={(e) => handleSelectChange(appointment._id, e.target.value)}
                        className={` 
                          ${appointment.status === 'Confirmed' ? 'bg-green-200' :
                            appointment.status === 'Cancelled' ? 'bg-red-200' :
                              appointment.status === 'Completed' ? 'bg-purple-200' : 'bg-gray-200'} 
                            rounded-xl px-4 py-3 outline-none border focus:border focus:border-violet-500
                        `}
                        disabled={appointment.isCompleted || appointment.cancelled}
                      >
                        <option value="Pending" className="bg-gray-100">Pendind</option>
                        <option value="Confirmed" className="bg-green-100">Confirmed</option>
                        <option value="Cancelled" className="bg-red-100">Cancelled</option>
                        <option value="Completed" className="bg-purple-100">Completed</option>
                      </select>
                      {selectedAppointmentId && newStatus && (
                        <button
                          onClick={updateStatus}
                          className="ml-2 px-3 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-all duration-300 cursor-pointer"
                        >
                          Update
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DoctorAppointments;