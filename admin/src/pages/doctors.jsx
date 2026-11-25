import { FaUserDoctor, FaUserCheck, FaUserClock, FaCalendarDays, FaPlus, FaFilter, FaDownload, FaTrash } from "react-icons/fa6";
import { FaSearch, FaEdit } from "react-icons/fa";
import { useContext, useState, useMemo, useEffect } from "react";
import { Context } from "../context/context.jsx";
import { toast } from "react-toastify";
import axiosInstance from "../utils/axiosInstance.js";
import { debounce } from 'lodash';
import Pagination from "../components/pagination.jsx";
import Loader from "../components/loader.jsx";

const Doctor = () => {
  const { auth, currency } = useContext(Context);

  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('')

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [doctors, setDoctors] = useState([])
  const [totalDoctors, setTotalDoctors] = useState([]);

  const [loader, setLoader] = useState(false);

  const handleSearch = useMemo(() =>
    debounce((t) => {
      setSearch(t);
      setPage(1);
    }, 1000), []
  );
  
  const availableDoctors = totalDoctors;
  const activeDoctorsPercent = totalDoctors ? Math.round((availableDoctors / totalDoctors) * 100) : 0;
  const [avgExperience, setAvgExperience] = useState(0);

  // Stats array
  const stats = [
    {
      title: "Total Doctors",
      value: totalDoctors,
      icon: <FaUserDoctor />,
      bg: "bg-blue-500/10",
      text: "text-blue-600",
    },
    {
      title: "Active Doctors",
      value: activeDoctorsPercent,
      icon: <FaUserCheck />,
      bg: "bg-green-500/10",
      text: "text-green-600",
    },
    {
      title: "Available Now",
      value: availableDoctors,
      icon: <FaUserClock />,
      bg: "bg-orange-500/10",
      text: "text-orange-600",
    },
    {
      title: "Avg Experience",
      value: avgExperience,
      icon: <FaCalendarDays />,
      bg: "bg-purple-500/10",
      text: "text-purple-600",
    },
  ];

  const handleDelete = async (docId) => {
    try {
      if (auth.status !== 'authenticated' && auth.role !== 'admin') {
        return navigate('/login');
      }

      setLoader(true);
      const response = await axiosInstance.delete(`/api/v1/admin/deletedoctor/${docId}`);
      if (response.data.success) {
        toast.success(response.data.message);
        setDoctors((prev) => prev.filter((p) => p._id !== docId))
      }

    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoader(false);
    }
  }

  const fetchDoctors = async (page) => {
    try {

      setLoader(true);

      const params = new URLSearchParams();

      params.append('page', page);
      params.append('limit', 6);

      const response = await axiosInstance.get(`/api/v1/admin/doctors?${params.toString()}`);
      if (response.data.success) {
        setDoctors(response.data.doctors);
        setTotalDoctors(response.data.totalDoctors);
        setTotalPages(response.data.totalPages);
        setPage(response.data.currentPage);
        setAvgExperience(response.data.avgExperience);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoader(false);
    }
  }

  useEffect(() => {
    if (auth.status === 'authenticated' && auth.role === 'admin') {
      fetchDoctors(page);
    }
  }, [auth, page]);

  if (loader) {
    return <Loader/>
  }

  return (
    <div className="flex min-h-screen w-full bg-gray-50">

      {/* Main Content */}
      <main className="w-full p-4 md:p-8 overflow-x-hidden">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Registered Doctors
            </h1>
            <p className="text-gray-500 text-sm">
              Manage and monitor all doctors in the system
            </p>
          </div>

          <button className="flex items-center gap-2 bg-linear-to-r from-purple-600 to-cyan-500 text-white px-5 py-3 rounded-xl shadow hover:scale-105 transition">
            <FaPlus />
            Add Doctor
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 shadow flex items-center gap-4"
            >
              <div className={`p-3 rounded-xl ${item.bg} ${item.text}`}>
                {item.icon}
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">
                  {item.title}
                </p>
                <h2 className="text-xl font-bold text-gray-800">
                  {item.value}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">

          {/* Top Bar */}
          <div className="p-4 md:p-6 flex flex-col md:flex-row gap-3 justify-between">

            <div className="relative w-full md:w-1/2">
              <FaSearch className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search doctor..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-100 outline-none focus:border focus:border-purple-600"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-175">
              <thead className="bg-gray-100 text-left text-sm text-gray-600">
                <tr>
                  <th className="p-4">Doctor</th>
                  <th className="p-4">Speciality</th>
                  <th className="p-4">Experience</th>
                  <th className="p-4">Fees</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody>
                {doctors.map((doc, i) => (
                  <tr key={i} className="hover:bg-gray-50">

                    <td className="p-4">
                      <div>
                        <p className="font-semibold">{doc.name}</p>
                        <p className="text-xs text-gray-500">{doc.email}</p>
                      </div>
                    </td>

                    <td className="p-4">{doc.speciality}</td>

                    <td className="p-4">{doc.experience}</td>

                    <td className="p-4 font-semibold text-gray-700">
                      {currency}{doc.fees}
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 text-xs rounded-full ${doc.available
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                          }`}
                      >
                        {doc.available ? "Available" : "Unavailable"}
                      </span>
                    </td>

                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        {/* <button className="p-2 hover:bg-gray-100 rounded-lg">
                          <FaEdit />
                        </button> */}
                        <button onClick={() => { handleDelete(doc._id) }} className="p-2 cursor-pointer hover:bg-red-100 text-red-500 rounded-lg">
                          <FaTrash />
                        </button>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

        {/* Pagination */}
        <div className="my-10">
          <Pagination
            totalPages={totalPages}
            page={page}
            setPage={setPage}
          />
        </div>

      </main>

    </div>
  );
};

export default Doctor;