import React, { useContext, useEffect, useState } from "react";
import { FaCamera, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaVenusMars, FaCalendarAlt, FaEdit, FaSave } from "react-icons/fa";
import { Context } from "../context/context";
import Loader from "../components/loader.jsx";
import axiosInstance from "../utils/axiosInstance.js";
import { toast } from "react-toastify";

const Profile = () => {

  const { userProfile, setUserProfile, authState } = useContext(Context);

  const [isEditing, setIsEditing] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    address: "",
  });

  useEffect(() => {
    if (userProfile) {
      setUserData({
        name: userProfile.name || '',
        email: userProfile.email || '',
        phone: userProfile.phone || '',
        gender: userProfile.gender || '',
        dob: userProfile.dob ? new Date(userProfile.dob).toISOString().split('T')[0] : "" , 
        address: userProfile.address || '',
      });
      setAvatar(userProfile.avatar)
    }
  }, [userProfile]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (authState !== 'authenticated') {
        return navigate('/login');
      }

      setLoading(true);

      const formData = new FormData();

      formData.append("name", userData.name);
      formData.append("email", userData.email);
      formData.append("phone", userData.phone);
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);
      formData.append("address", userData.address);
      avatar && formData.append("avatar", avatar);

      const response = await axiosInstance.patch(`/api/v1/user/updateprofile`, formData);
      if (response.data.success) {
        toast.success(response.data.message);
        setIsEditing(!isEditing);
        setUserProfile(response.data.updatedProfile);
        setIsEditing(false);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            My Profile
          </h1>

          <p className="text-slate-500 mt-2">
            Manage your personal information
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Left Card */}

          <div className="bg-white rounded-3xl shadow-lg p-8 h-fit">

            <div className="flex flex-col items-center">

              <div className="relative">

                {avatar ? <img src={typeof avatar === 'string' ? avatar : URL.createObjectURL(avatar)} alt={userData.name}
                  className="w-36 h-36 rounded-full object-cover border-4 border-violet-100"
                />
                :
                <div className="w-36 h-36 rounded-full bg-gray-100 border-4 border-violet-100"></div>
                }

                {isEditing && (
                  <>
                    <label htmlFor="avatar" className="absolute bottom-1 right-1 w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center cursor-pointer">
                      <FaCamera />
                    </label>
                    <input type="file" id="avatar" hidden accept="image/*" onChange={(e) => setAvatar(e.target.files[0])} />
                  </>
                )}
              </div>

              <h2 className="mt-5 text-xl font-bold">
                {userData.name}
              </h2>

              <p className="text-slate-500">
                {userData.email}
              </p>

              <button onClick={() => setIsEditing(!isEditing)} className="mt-6 flex items-center gap-2 bg-linear-to-r from-violet-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-medium">
                <FaEdit /> {isEditing ? "Cancel Editing" : "Edit Profile"}
              </button>
            </div>
          </div>

          {/* Right Form */}

          <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8">

            <form onSubmit={onSubmitHandler} className="space-y-6" >

              {/* Name */}
              <div>
                <label className="font-medium flex items-center gap-2 mb-2">
                  <FaUser /> Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full border rounded-xl px-4 py-3 disabled:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="font-medium flex items-center gap-2 mb-2">
                  <FaEnvelope /> Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  disabled
                  className="w-full border rounded-xl px-4 py-3 bg-slate-100"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">

                {/* Phone */}
                <div>
                  <label className="font-medium flex items-center gap-2 mb-2">
                    <FaPhone /> Phone
                  </label>

                  <input
                    type="text"
                    name="phone"
                    value={userData.phone}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full border rounded-xl px-4 py-3 disabled:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="font-medium flex items-center gap-2 mb-2">
                    <FaVenusMars /> Gender
                  </label>

                  <select
                    name="gender"
                    value={userData.gender}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full border rounded-xl px-4 py-3 disabled:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* DOB */}

              <div>
                <label className="font-medium flex items-center gap-2 mb-2">
                  <FaCalendarAlt /> Date of Birth
                </label>

                <input
                  type="date"
                  name="dob"
                  value={userData.dob}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full border rounded-xl px-4 py-3 disabled:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              {/* Address */}
              <div>
                <label className="font-medium flex items-center gap-2 mb-2">
                  <FaMapMarkerAlt /> Address
                </label>

                <textarea
                  rows="4"
                  name="address"
                  value={userData.address}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full border rounded-xl px-4 py-3 disabled:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              {isEditing && (
                <div className="flex justify-end">
                  <button type="submit" className="flex items-center gap-2 bg-linear-to-r from-violet-600 to-cyan-500 hover:bg-linear-to-r hover:from-purple-700 hover:to-cyan-600 cursor-pointer text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:scale-105 transition-all duration-200">
                    <FaSave /> Save Profile
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;