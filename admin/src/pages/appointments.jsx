import React, { useContext } from "react";
import {FaCalendarCheck,FaClock,FaMoneyBillWave,FaTimesCircle,FaUser,FaUserMd,FaEllipsisV} from "react-icons/fa";
import { Context } from "../context/context.jsx";

const Appointments = () => {
  const { currency, appointments } = useContext(Context);

  const stats = [
    {
      title: "Total Appointments",
      value: appointments.length,
      icon: <FaCalendarCheck />,
      bg: "bg-gradient-to-r from-purple-500 to-cyan-500",
      text: "text-white",
    },
    {
      title: "Pending Payments",
      value: appointments.filter((a) => !a.payment && !a.cancelled).length,
      icon: <FaClock />,
      bg: "bg-yellow-100",
      text: "text-yellow-600",
    },
    {
      title: "Revenue",
      value: `${currency}${appointments.filter((a) => a.payment).reduce((acc, curr) => acc + curr.amount, 0)}`,
      icon: <FaMoneyBillWave />,
      bg: "bg-green-100",
      text: "text-green-600",
    },
    {
      title: "Cancelled",
      value: appointments.filter((a) => a.cancelled).length,
      icon: <FaTimesCircle />,
      bg: "bg-red-100",
      text: "text-red-600",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 p-4 md:p-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            All Appointments
          </h1>
          <p className="text-gray-500 text-sm">
            Manage all patient appointments
          </p>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border rounded-xl flex items-center gap-2 text-sm">
            <FaCalendarCheck /> Export
          </button>

          <button className="px-4 py-2 bg-linear-to-r from-purple-600 to-cyan-500 text-white rounded-xl flex items-center gap-2 text-sm">
            <FaCalendarCheck /> New
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 shadow-sm"
          >
            <div className="flex justify-between items-center mb-3">
              <div className={`p-2 rounded-lg ${s.bg} ${s.text}`}>
                {s.icon}
              </div>
            </div>

            <p className="text-sm text-gray-500">{s.title}</p>
            <h2 className="text-2xl font-bold text-gray-900">{s.value}</h2>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
        <table className="w-full min-w-225">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left text-sm">Patient</th>
              <th className="p-4 text-left text-sm">Doctor</th>
              <th className="p-4 text-left text-sm">Date</th>
              <th className="p-4 text-left text-sm">Time</th>
              <th className="p-4 text-left text-sm">Amount</th>
              <th className="p-4 text-left text-sm">Payment</th>
              <th className="p-4 text-left text-sm">Status</th>
              {/* <th className="p-4 text-right text-sm">Action</th> */}
            </tr>
          </thead>

          <tbody>
            {appointments.map((a) => (
              <tr key={a._id} className="hover:bg-gray-50">

                {/* Patient */}
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                      <img src={a.docData.image} alt="" />
                    </div>
                    <div>
                      <p className="font-medium">{a.userData.name}</p>
                      <p className="text-xs text-gray-500">{a.userData.email}</p>
                    </div>
                  </div>
                </td>

                {/* Doctor */}
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <span>{a.docData.name}</span>
                  </div>
                </td>

                {/* Date */}
                <td className="p-4 text-sm">{a.slotDate}</td>

                {/* Time */}
                <td className="p-4 text-sm">{a.slotTime}</td>

                {/* Amount */}
                <td className="p-4 font-semibold">{currency}{a.amount}</td>

                {/* Payment */}
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      a.payment
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {a.payment ? "Paid" : "Pending"}
                  </span>
                </td>

                {/* Status */}
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      a.cancelled
                        ? "bg-red-100 text-red-600"
                        : a.isCompleted
                        ? "bg-blue-100 text-blue-600"
                        : a.status === 'Pending' 
                        ? "bg-gray-100 text-gray-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {a.status}
                  </span>
                </td>

                {/* Action */}
                {/* <td className="p-4 text-right">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <FaEllipsisV />
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Appointments;