import React, { useContext, useMemo } from "react";
import { MdVerified, MdSecurity, MdSupportAgent, MdPublic, MdShare, MdSend, MdCalendarMonth, MdCalendarToday } from "react-icons/md";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { Context } from "../context/context";
import { Link } from "react-router-dom"

const Home = () => {

  const { doctors, currency } = useContext(Context);

  const specialities = useMemo(() => {
    return [...new Set(doctors.map(doc => doc.speciality))];
  }, [doctors]);

  const scrollToTop = () => {
      window.scrollTo({top:0, left:0, behavior:"smooth"});
  }

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e]">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm">
            <MdVerified /> Trusted by 2M+ Patients
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 leading-tight">
            Book Appointments With <span className="text-purple-600">Trusted Doctors</span>
          </h1>

          <p className="text-gray-600 mt-6 max-w-lg">
            Find specialists, schedule appointments, and manage your healthcare journey with ease through our secure portal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="#doctors">
              <button className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-white bg-linear-to-r from-purple-600 to-cyan-500 hover:bg-linear-to-r hover:from-purple-700 hover:to-cyan-600 transition-all duration-200 cursor-pointer">
                Book Appointment
                <FaArrowRight />
              </button>
            </a>
            <Link to='/doctors' onClick={scrollToTop}>
              <button className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border hover:text-white hover:bg-linear-to-r hover:from-purple-600 hover:to-cyan-500 transition-all duration-200 cursor-pointer">
                Find Doctors <FaSearch />
              </button>
            </Link>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-200 blur-3xl rounded-full"></div>
          <div className="bg-white p-4 rounded-3xl shadow-lg relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcgFxMHBb4x_fwT7beAAAoByEnM55u7hwP5W-d9EBiNW6O0Hcx5iBzzzZZecEIwclGbSkx1ZJELRz8Nk58YmNgLYMYtZnHqTgHNvYbbY_EACJTM_nVeKrjvbidSZe-lEy-M_JadbQ3wDSljVPIFdjrsF7YipjZ_3UoxT5ebo7zBqLGFEffCJINFjOa9GZw3y6t_3o-0nyP8HTQRifpjok3VIQxcQ-7JChS0uO299DnbkuOLnKBFlPejhEDgzP1kSKeSeHGOALIFS8"
              className="rounded-2xl w-full"
              alt=""
            />

            <div className="absolute -bottom-8 -left-8 bg-white shadow-lg p-4 rounded-2xl hidden md:flex items-center gap-3">
              <MdCalendarMonth className="text-purple-600 text-2xl" />
              <div>
                <p className="text-xs text-gray-500">Available Today</p>
                <p className="font-bold">120+ Doctors</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* SPECIALITIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-2xl sm:text-3xl font-bold">Find by Speciality</h2>
          <p className="text-gray-500 mt-2">
            Browse our medical specialists
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {specialities.map((item, i) => (
              <div
                key={i}
                className="p-6 bg-[#f7f9fb] rounded-2xl hover:shadow-lg transition"
              >
                <MdVerified className="text-purple-600 text-3xl mx-auto mb-3" />
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* DOCTORS */}
      <section className="py-20" id="doctors">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Our Top Specialists</h2>
              <p className="text-gray-500 mt-2">Highly experienced doctors</p>
            </div>

            <Link to='/doctors' onClick={scrollToTop} className="text-purple-600 font-semibold flex items-center gap-1 mt-2">
              View All <FaArrowRight />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {doctors.slice(0, 4).map((doc, i) => (
              <Link to={`/doctor/${doc._id}`} key={i} onClick={scrollToTop} className="bg-white rounded-2xl shadow overflow-hidden">

                <div className="h-56 relative">
                  <img src={doc.image} className="w-full h-full object-cover" alt={doc.name} />
                  <span className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full bg-green-100 text-green-600">
                    {doc.availability ? "Available" : "Unavailable"}
                  </span>
                </div>

                <div className="p-5">
                  <span className="text-sm text-purple-600">{doc.speciality}</span>
                  <h3 className="font-bold text-lg line-clamp-1">{doc.name}</h3>

                  <p className="text-gray-500 text-sm">{doc.experience} of Experience</p>

                  <div className="flex justify-between items-center mt-5">
                    <div>
                      <p className="text-xs text-gray-400">Fees from</p>
                      <p className="font-bold">{currency}{doc.fees}</p>
                    </div>

                    <button className="relative group bg-linear-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white p-3 rounded-xl cursor-pointer">
                      <MdCalendarToday />
                      <span className="absolute -top-10 right-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap bg-white text-gray-700 text-sm px-3 py-1 rounded-md shadow-lg pointer-events-none">
                        Book Visit
                      </span>
                    </button>
                  </div>
                </div>

              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">

          <div className="bg-[#f7f9fb] rounded-2xl p-6 flex flex-col items-center text-center">
            <MdVerified className="text-purple-600 text-4xl mb-4" />
            <h3 className="font-bold text-lg">Verified Doctors</h3>
            <p className="text-gray-500 text-sm mt-2">
              All doctors are verified for quality care.
            </p>
          </div>

          <div className="bg-[#f7f9fb] rounded-2xl p-6 flex flex-col items-center text-center">
            <MdCalendarMonth className="text-purple-600 text-4xl mb-4" />
            <h3 className="font-bold text-lg">Online Booking</h3>
            <p className="text-gray-500 text-sm mt-2">
              Schedule appointments with ease.
            </p>
          </div>

          <div className="bg-[#f7f9fb] rounded-2xl p-6 flex flex-col items-center text-center">
            <MdSecurity className="text-purple-600 text-4xl mb-4" />
            <h3 className="font-bold text-lg">Secure Payments</h3>
            <p className="text-gray-500 text-sm mt-2">
              Safe and encrypted transactions.
            </p>
          </div>

          <div className="bg-[#f7f9fb] rounded-2xl p-6 flex flex-col items-center text-center">
            <MdSupportAgent className="text-purple-600 text-4xl mb-4" />
            <h3 className="font-bold text-lg">Fast Support</h3>
            <p className="text-gray-500 text-sm mt-2">
              24/7 customer support for all your needs.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-linear-to-r from-purple-600 to-cyan-500 text-white rounded-3xl p-16 text-center relative overflow-hidden">

          <h2 className="text-4xl font-bold">Ready to get started?</h2>
          <p className="mt-4 text-white/90">
            Join thousands of patients using Medora
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold">
              Create Free Account
            </button>

            <button className="border border-white/30 px-8 py-4 rounded-2xl">
              Contact Sales
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;