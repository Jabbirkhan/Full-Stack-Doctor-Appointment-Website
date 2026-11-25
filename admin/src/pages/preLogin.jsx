import { Link } from 'react-router-dom'
import {
  FaUserShield,
  FaUserDoctor,
  FaArrowRight,
  FaShieldHeart,
  FaStethoscope,
} from 'react-icons/fa6'

const PreLogin = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      {/* Header */}
      <header className="px-5 sm:px-8 lg:px-12 py-5">
        <div className="max-w-7xl mx-auto flex items-center gap-2">

          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm">
            <FaStethoscope className="text-lg" />
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-800">
              Doctor Appointment
            </h2>

            <p className="text-xs text-slate-500">
              Healthcare Management System
            </p>
          </div>

        </div>
      </header>


      {/* Main */}
      <main className="flex-1 flex items-center px-5 sm:px-8 lg:px-12 py-10 sm:py-14">

        <div className="w-full max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">

            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-5">
              <FaShieldHeart />
              Secure Healthcare Portal
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Welcome to your
              <span className="text-blue-600"> healthcare portal</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed">
              Select your role to access the tools and services designed
              for managing your healthcare operations.
            </p>

          </div>


          {/* Role Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

            {/* Admin Card */}
            <div className="group bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

              <div className="flex items-start justify-between">

                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FaUserShield className="text-2xl" />
                </div>

                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Administration
                </span>

              </div>


              <div className="mt-7">

                <h2 className="text-2xl font-bold text-slate-900">
                  Admin Portal
                </h2>

                <p className="mt-3 text-slate-500 leading-relaxed">
                  Manage doctors, patients, appointments, schedules,
                  departments, and the overall healthcare platform.
                </p>

              </div>


              <div className="mt-6 space-y-2 text-sm text-slate-500">

                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  Manage doctors and staff
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  Manage appointments
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  Monitor platform activity
                </div>

              </div>


              <Link
                to="/admin-login"
                className="mt-8 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3.5 rounded-xl transition-all duration-200 group-hover:shadow-lg group-hover:shadow-blue-100"
              >
                Continue as Admin
                <FaArrowRight className="text-sm transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

            </div>


            {/* Doctor Card */}
            <div className="group bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

              <div className="flex items-start justify-between">

                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <FaUserDoctor className="text-2xl" />
                </div>

                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Medical Staff
                </span>

              </div>


              <div className="mt-7">

                <h2 className="text-2xl font-bold text-slate-900">
                  Doctor Portal
                </h2>

                <p className="mt-3 text-slate-500 leading-relaxed">
                  Manage your appointments, schedule, patient information,
                  consultations, and professional profile.
                </p>

              </div>


              <div className="mt-6 space-y-2 text-sm text-slate-500">

                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  Manage your appointments
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  Manage availability
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  View patient information
                </div>

              </div>


              <Link
                to="/doctor-login"
                className="mt-8 w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-3.5 rounded-xl transition-all duration-200 group-hover:shadow-lg group-hover:shadow-emerald-100"
              >
                Continue as Doctor
                <FaArrowRight className="text-sm transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

            </div>

          </div>


          {/* Security Note */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
            <FaShieldHeart className="text-blue-500" />
            Secure access for authorized healthcare professionals
          </div>

        </div>

      </main>

    </div>
  )
}

export default PreLogin