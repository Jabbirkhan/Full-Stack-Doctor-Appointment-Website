import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { FaCloudUploadAlt, FaUserMd, FaEnvelope, FaLock, FaMoneyBillWave, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import axiosInstance from "../utils/axiosInstance.js";
import Loader from "../components/loader.jsx";
import { Context } from "../context/context.jsx";

const AddDoctor = () => {
  const { auth, setDoctors, navigate } = useContext(Context);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    speciality: "",
    degree: "",
    experience: "",
    about: "",
    fees: "",
    address: {
      line1: "",
      line2: "",
    },
  });

  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if(auth.status !== 'authenticated' && auth.role !== 'admin'){
        return navigate('/login');
      }

      setLoading(true);

      const doctorData = new FormData();

      doctorData.append("name", formData.name);
      doctorData.append("email", formData.email);
      doctorData.append("password", formData.password);
      doctorData.append("speciality", formData.speciality);
      doctorData.append("degree", formData.degree);
      doctorData.append("experience", formData.experience);
      doctorData.append("about", formData.about);
      doctorData.append("fees", formData.fees);
      doctorData.append("address", JSON.stringify(formData.address));
      image && doctorData.append("image", image);

      const response = await axiosInstance.post("/api/v1/admin/adddoctor", doctorData);
      if (response.data.success) {
        toast.success(response.data.message);
        setDoctors((prev)=> [...prev, response.data.doctor]);
        setFormData({
          name: "",
          email: "",
          password: "",
          speciality: "",
          degree: "",
          experience: "",
          about: "",
          fees: "",
          available: true,
          address: {
            line1: "",
            line2: "",
          },
        });

        setImage(null);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  if(loading){
    return <Loader />
  }

  return (
    <div className="min-h-screen w-full bg-slate-50 p-4 md:p-8">
      {/* Header */}
      <div className="mb-8 ml-10 sm:ml-0">
        <h1 className="text-3xl font-bold text-slate-900">
          Add Doctor
        </h1>
        <p className="text-slate-500 mt-1">
          Onboard a new specialist to the medical network
        </p>
      </div>

      <form onSubmit={onSubmitHandler} className="grid grid-cols-1 sm:grid-cols-8 lg:grid-cols-12 gap-5">
        {/* Left Side */}
        <div className="sm:col-span-3 lg:col-span-4 space-y-6">

          {/* Image Upload */}
          <div className="bg-white rounded-3xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-5">
              Doctor Photo
            </h2>

            <label htmlFor="image" className="cursor-pointer block">
              <div className="aspect-square border-2 border-dashed border-slate-300 rounded-3xl bg-gray-100 flex items-center justify-center overflow-hidden hover:border-violet-500 transition">
                {image ? (
                  <img src={URL.createObjectURL(image)} alt="Doctor" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center">
                    <FaCloudUploadAlt className="mx-auto text-5xl text-violet-600 mb-3" />
                    <p className="font-medium">
                      Upload Doctor Image
                    </p>
                    <p className="text-sm text-slate-500">
                      JPG, PNG, JPEG
                    </p>
                  </div>
                )}
              </div>

              <input type="file" hidden accept="image/*" id="image" onChange={(e)=>setImage(e.target.files[0])} />
            </label>
          </div>

          {/* Administrative */}
          <div className="bg-white rounded-3xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-5">
              Administrative
            </h2>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium block mb-2">
                  Password
                </label>

                <input
                  type="password"
                  value={formData.password}
                  placeholder="Type Doctor Password"
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full rounded-xl px-4 py-3 outline-none bg-gray-100 focus:border focus:border-violet-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">
                  Consultation Fee
                </label>

                <input
                  type="number"
                  value={formData.fees}
                  placeholder="Type Doctor Fees"
                  onChange={(e) => setFormData({...formData, fees: e.target.value === "" ? "" : Number(e.target.value)})}
                  className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:border focus:border-violet-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="sm:col-span-5 lg:col-span-8">
          <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="Doctor Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-gray-100 rounded-xl px-4 py-3 outline-none focus:border focus:border-violet-500"
              />

              <input
                type="email"
                placeholder="Doctor Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-gray-100 rounded-xl px-4 py-3 outline-none focus:border focus:border-violet-500"
              />

              <select
                value={formData.speciality}
                onChange={(e) => setFormData({...formData, speciality: e.target.value})}
                className="bg-gray-100 rounded-xl px-4 py-3 outline-none focus:border focus:border-violet-500"
              >
                <option value="">Select Speciality</option>
                <option value="General physician">
                  General physician
                </option>
                <option value="Gynecologist">
                  Gynecologist
                </option>
                <option value="Dermatologist">
                  Dermatologist
                </option>
                <option value="Neurologist">
                  Neurologist
                </option>
                <option value="Pediatricians">
                  Pediatricians
                </option>
              </select>

              <input
                type="number"
                placeholder="Experience (Years)"
                value={formData.experience}
                onChange={(e) => setFormData({...formData,  experience: e.target.value === "" ? "" : Number(e.target.value)})}
                className="bg-gray-100 rounded-xl px-4 py-3 outline-none focus:border focus:border-violet-500"
              />

              <input
                type="text"
                placeholder="Degree"
                value={formData.degree}
                onChange={(e) => setFormData({...formData, degree: e.target.value})}
                className="bg-gray-100 rounded-xl px-4 py-3 outline-none focus:border focus:border-violet-500"
              />

              <input
                type="text"
                placeholder="Address Line 1"
                value={formData.address.line1}
                onChange={(e) => setFormData({...formData, address: {...formData.address, line1: e.target.value}})}
                className="bg-gray-100 rounded-xl px-4 py-3 outline-none focus:border focus:border-violet-500"
              />
            </div>

            <input
              type="text"
              placeholder="Address Line 2"
              value={formData.address.line2}
              onChange={(e) => setFormData({...formData, address: {...formData.address, line2: e.target.value}})}
              className="bg-gray-100 rounded-xl px-4 py-3 w-full mt-5 outline-none focus:border focus:border-violet-500"
            />

            <textarea
              rows={6}
              placeholder="Doctor Biography"
              value={formData.about}
              onChange={(e) => setFormData({...formData, about: e.target.value})}
              className="bg-gray-100 rounded-xl px-4 py-3 w-full mt-5 resize-none outline-none focus:border focus:border-violet-500"
            />

            <div className="flex justify-end mt-8">
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 rounded-xl bg-linear-to-r from-purple-600 to-cyan-500 text-white hover:bg-linear-to-r hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 cursor-pointer font-semibold disabled:opacity-50"
              >
                {loading ? "Adding..." : "Add Doctor"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;