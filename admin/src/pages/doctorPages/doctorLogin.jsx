import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { FiEye, FiEyeOff, FiMail, FiLock, FiActivity, FiArrowRight, FiCheckCircle, FiHeart } from 'react-icons/fi'
import { Context } from '../../context/context.jsx'
import axiosInstance from '../../utils/axiosInstance.js'
import Loader from '../../components/loader.jsx'

const DoctorLogin = () => {

  const { navigate, setAuth } = useContext(Context)

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  const onSubmithandler = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const response = await axiosInstance.post('/api/v1/doctor/login', { email, password })

      if (response.data.success) {
        setAuth({
          status: 'authenticated',
          role: response.data.role
        })

        toast.success(response.data.message || "Admin login successfully")
      }

    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred during login")
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <Loader />

  return (
    <div className="min-h-screen w-full bg-slate-100 flex items-center justify-center p-4 sm:p-6">

      <div className="w-full max-w-5xl min-h-155 bg-white rounded-2xl shadow-xl overflow-hidden flex">

        {/* Left Side */}

        <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative overflow-hidden">

          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-emerald-500/10" />
          <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-blue-600/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-white/5" />

          <div className="relative z-10 flex flex-col justify-between w-full p-12 text-white">

            {/* Brand */}

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-xl bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-600/20">
                <FiActivity size={23} />
              </div>

              <div>
                <h1 className="text-xl font-bold tracking-tight">
                  DoctorPortal
                </h1>
                <p className="text-xs text-slate-400">
                  Healthcare Management System
                </p>
              </div>

            </div>

            {/* Content */}

            <div className="max-w-md">

              <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-4">
                Doctor Access
              </p>

              <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-6">
                Your practice, connected in one place.
              </h2>

              <p className="text-slate-400 leading-relaxed mb-8">
                Sign in to manage your appointments, patients and
                professional activities through your secure doctor
                dashboard.
              </p>

              <div className="space-y-4">

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <FiCheckCircle className="text-emerald-400" size={18} />
                  Secure doctor access
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <FiCheckCircle className="text-emerald-400" size={18} />
                  Manage patient appointments
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <FiCheckCircle className="text-emerald-400" size={18} />
                  Access your healthcare dashboard
                </div>

              </div>

            </div>

            {/* Footer */}

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <FiHeart size={14} />
              <span>Secure healthcare management</span>
            </div>

          </div>

        </div>


        {/* Right Side */}

        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10 lg:p-12">

          <div className="w-full max-w-md">

            {/* Mobile Brand */}

            <div className="lg:hidden flex items-center gap-3 mb-8">

              <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                <FiActivity size={22} />
              </div>

              <div>
                <h1 className="text-lg font-bold text-slate-900">
                  DoctorPortal
                </h1>
                <p className="text-xs text-slate-500">
                  Healthcare Management System
                </p>
              </div>

            </div>


            {/* Header */}

            <div className="mb-8">

              <p className="text-sm font-semibold text-emerald-600 mb-2">
                Welcome back, Doctor
              </p>

              <h2 className="text-3xl font-bold text-slate-900">
                Doctor Login
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Sign in to access your doctor dashboard.
              </p>

            </div>


            {/* Form */}

            <form onSubmit={onSubmithandler} className="flex flex-col gap-5">

              {/* Email */}

              <div>

                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>

                <div className="relative">

                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                    placeholder="doctor@example.com"
                    required
                  />

                </div>

              </div>


              {/* Password */}

              <div>

                <div className="flex items-center justify-between mb-2">

                  <label className="block text-sm font-medium text-slate-700">
                    Password
                  </label>

                  <button
                    type="button"
                    onClick={() => navigate('/doctor-forget-password')}
                    className="text-xs font-medium text-emerald-600 hover:text-emerald-700 hover:underline transition cursor-pointer"
                  >
                    Forgot password?
                  </button>

                </div>


                <div className="relative">

                  <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />

                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                    placeholder="Enter your password"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition cursor-pointer"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </button>

                </div>

              </div>


              {/* Login Button */}

              <button
                type="submit"
                className="group w-full mt-2 py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm shadow-lg shadow-emerald-600/20 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                Sign In

                <FiArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />

              </button>


              {/* Security Message */}

              <div className="flex items-center justify-center gap-2 pt-2 text-xs text-slate-400">
                <FiCheckCircle size={14} className="text-emerald-500" />
                <span>Your account information is securely protected.</span>
              </div>

            </form>


            {/* Footer */}

            <div className="mt-10 pt-6 border-t border-slate-100 text-center">

              <p className="text-xs text-slate-400">
                Authorized healthcare professionals only
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default DoctorLogin
