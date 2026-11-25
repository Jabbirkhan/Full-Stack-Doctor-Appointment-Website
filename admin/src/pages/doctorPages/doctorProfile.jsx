import React, { useState } from "react";
import { FaCamera, FaUserMd, FaStethoscope, FaGraduationCap, FaBriefcaseMedical, FaMoneyBillWave, FaMapMarkerAlt, FaEdit, FaSave, FaInfoCircle } from "react-icons/fa";
import { all_doctors } from "../../assets/assets.js";
import { useContext } from "react";
import { Context } from "../../context/context.jsx";
import { useEffect } from "react";
import Loader from "../../components/loader.jsx";
import axiosInstance from "../../utils/axiosInstance.js";
import { toast } from "react-toastify";

const DoctorProfile = () => {

  const { auth, doctorProfile, setDoctors } = useContext(Context);
  const [availability, setAvailablity] = useState(false) // This state is controlled

  useEffect(() => {
    if (doctorProfile) {
      setFormData({
        name: doctorProfile.name || "",
        email: doctorProfile.email || "",
        speciality: doctorProfile.speciality || "",
        degree: doctorProfile.degree || "",
        experience: doctorProfile.experience || "",
        about: doctorProfile.about || "",
        fees: doctorProfile.fees || "",
        address: {
          line1: doctorProfile.address?.line1 || "",
          line2: doctorProfile.address?.line2 || "",
        },
      });

      setAvailablity(doctorProfile.available);
      setImage(doctorProfile.image);
    }
  }, [doctorProfile]);

  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
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

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const [loading, setLoading] = useState(false);

  const changeAvailability = async () => {
    const newAvailability = !availability;
    setAvailablity(newAvailability);
    try {
      if (auth.status !== 'authenticated' && auth.role !== 'doctor') {
        return navigate('/login');
      }
      const response = await axiosInstance.patch(`/api/v1/doctor/change-availability`, {available : newAvailability});
      if (response.data.success) {
        toast.success(response.data.message);
        setAvailablity(response.data.doctor.available);
        setDoctors((prev) => prev.map((d) => d._id === response.data.doctor._id ? response.data.doctor : d));
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  }

  const onSubmitHandler = async (e) => {

    e.preventDefault();

    try {
      if (auth.status !== 'authenticated' && auth.role !== 'admin') {
        return navigate('/login');
      }

      setLoading(true);

      const doctorData = new FormData();

      doctorData.append("name", formData.name);
      doctorData.append("email", formData.email);
      doctorData.append("speciality", formData.speciality);
      doctorData.append("degree", formData.degree);
      doctorData.append("experience", formData.experience);
      doctorData.append("about", formData.about);
      doctorData.append("fees", formData.fees);
      doctorData.append("address", JSON.stringify(formData.address));
      image && doctorData.append("image", image);

      const response = await axiosInstance.patch(`/api/v1/doctor/updateprofile/${doctorProfile._id}`, doctorData);
      if (response.data.success) {
        toast.success(response.data.message);
        setIsEditing(!isEditing);
        setDoctors((prev) => prev.map((d) => d._id === response.data.updatedProfile._id ? response.data.updatedProfile : d));
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

        {/* Header */}

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Doctor Profile
          </h1>

          <p className="text-slate-500 mt-2">
            Manage doctor information and availability
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Card */}

          <div className="relative bg-white rounded-3xl shadow-lg p-8 h-fit">

            <div className="flex flex-col items-center">

              <div className="relative">

                {image && (
                  <img
                    src={typeof image === 'string' ? image : URL.createObjectURL(image)}
                    alt={formData.name}
                    className="w-36 h-36 rounded-full object-cover border-4 border-violet-100"
                  />
                )}

                {isEditing && (
                  <>
                    <label htmlFor="doctorImage" className="absolute bottom-1 right-1 w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center cursor-pointer">
                      <FaCamera />
                    </label>

                    <input type="file" onChange={(e) => setImage(e.target.files[0])} id="doctorImage" hidden accept="image/*" />
                  </>
                )}
              </div>

              <h2 className="mt-5 text-xl font-bold text-center">
                {formData.name}
              </h2>

              <p className="text-violet-600 font-medium">
                {formData.speciality}
              </p>

              <div
                className={`mt-3 px-4 py-2 rounded-full text-sm font-medium ${availability
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
                  }`}
              >
                {availability
                  ? "Available"
                  : "Unavailable"}
              </div>

              <button
                onClick={() => setIsEditing(!isEditing)}
                className="mt-6 flex items-center gap-2 bg-linear-to-r from-violet-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-medium"
              >
                <FaEdit />
                {isEditing ? "Cancel Editing" : "Edit Profile"}
              </button>
            </div>

            <div className="absolute top-5 right-5">
              <label className="relative inline-flex cursor-pointer items-center">
                
                <input
                  type="checkbox"
                  // checkbox is also controlled because its value comes from React state
                  // The double exclamation mark (!!) converts any value into a boolean.
                  checked={!!availability} 
                  onClick={changeAvailability}
                  className="peer hidden"
                  readOnly
                />

                <div
                  className="
                    h-8 w-14 rounded-full
                    bg-red-500
                    transition-colors duration-300
                    peer-checked:bg-green-500
                  "
                />

                <span
                  className="
                    absolute left-1 top-1
                    h-6 w-6 rounded-full bg-white
                    transition-transform duration-300
                    peer-checked:translate-x-6
                  "
                />
              </label>
            </div>

          </div>

          {/* Right Section */}

          <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8">

            <form
              onSubmit={onSubmitHandler}
              className="space-y-6"
            >

              {/* Name */}

              <div>
                <label className="font-medium flex items-center gap-2 mb-2">
                  <FaUserMd />
                  Doctor Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full border rounded-xl px-4 py-3 disabled:bg-slate-100 focus:ring-2 focus:ring-violet-500 outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">

                {/* Speciality */}

                <div>
                  <label className="font-medium flex items-center gap-2 mb-2">
                    <FaStethoscope />
                    Speciality
                  </label>

                  <input
                    type="text"
                    name="speciality"
                    value={formData.speciality}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full border rounded-xl px-4 py-3 disabled:bg-slate-100"
                  />
                </div>

                {/* Degree */}

                <div>
                  <label className="font-medium flex items-center gap-2 mb-2">
                    <FaGraduationCap />
                    Degree
                  </label>

                  <input
                    type="text"
                    name="degree"
                    value={formData.degree}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full border rounded-xl px-4 py-3 disabled:bg-slate-100"
                  />
                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                {/* Experience */}

                <div>
                  <label className="font-medium flex items-center gap-2 mb-2">
                    <FaBriefcaseMedical />
                    Experience
                  </label>

                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full border rounded-xl px-4 py-3 disabled:bg-slate-100"
                  />
                </div>

                {/* Fee */}

                <div>
                  <label className="font-medium flex items-center gap-2 mb-2">
                    <FaMoneyBillWave />
                    Consultation Fee ($)
                  </label>

                  <input
                    type="number"
                    name="fees"
                    value={formData.fees}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full border rounded-xl px-4 py-3 disabled:bg-slate-100"
                  />
                </div>

              </div>

              {/* About */}

              <div>
                <label className="font-medium flex items-center gap-2 mb-2">
                  <FaInfoCircle />
                  About Doctor
                </label>

                <textarea
                  rows="5"
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full border rounded-xl px-4 py-3 disabled:bg-slate-100"
                />
              </div>

              {/* Address */}

              <div>
                <label className="font-medium flex items-center gap-2 mb-2">
                  <FaMapMarkerAlt />
                  Address Line 1
                </label>

                <input
                  type="text"
                  className="w-full border rounded-xl px-4 py-3 disabled:bg-slate-100"
                  name="line1"
                  value={formData.address.line1}
                  disabled={!isEditing}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address: {
                        ...formData.address,
                        line1: e.target.value,
                      },
                    })
                  }
                />
              </div>

              <div>
                <label className="font-medium flex items-center gap-2 mb-2">
                  <FaMapMarkerAlt />
                  Address Line 2
                </label>

                <input
                  type="text"
                  className="w-full border rounded-xl px-4 py-3 disabled:bg-slate-100"
                  name="line2"
                  value={formData.address.line2}
                  disabled={!isEditing}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address: {
                        ...formData.address,
                        line2: e.target.value,
                      },
                    })
                  }
                />
              </div>

              {isEditing && (
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-linear-to-r from-violet-600 to-cyan-500 text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:scale-105 transition"
                  >
                    <FaSave />
                    Save Profile
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

export default DoctorProfile;


// Why do we use !!availability here? (Step by Step)
// When the component first renders, the API request is still running.
// At that moment, doctor data has not arrived yet.
// Because the data hasn't arrived, doctorProfile.available may be undefined.
// The checkbox's checked prop expects a boolean value (true or false).

                  // !!true        // true
                  // !!false       // false

                  // !!1           // true
                  // !!0           // false

                  // !!"hello"     // true
                  // !!""          // false

                  // !!null        // false
                  // !!undefined   // false

// If React receives undefined instead of a boolean, the checkbox is treated as uncontrolled.
// A little later, the API response arrives and now doctorProfile.available becomes true or false.
// React now sees that the checkbox has changed from uncontrolled (undefined) to controlled (true or false).
// React shows a warning because an input should not switch between uncontrolled and controlled modes during its lifetime.
// Using !!availability converts any value into a proper boolean.
// If availability is undefined, null, 0, or an empty string, !!availability becomes false.
// If availability contains a truthy value, !!availability becomes true.
// As a result, the checkbox always receives either true or false from the very first render.
// Since the checkbox always gets a boolean value, React treats it as controlled from the beginning and no warning occurs.