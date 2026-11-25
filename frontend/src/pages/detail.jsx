import React, { useContext, useEffect, useMemo, useState } from "react";
import { MdVerified, MdStar, MdApartment, MdCalendarMonth, MdChat, MdSchedule, MdWbSunny, MdDarkMode, MdWbTwilight, MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Context } from "../context/context";
import { useParams, Link } from "react-router-dom";
import Recommended from "../components/recommended";
import { toast } from "react-toastify";
import axiosInstance from "./../utils/axiosInstance.js";

const Detail = () => {

  const { id } = useParams();
  const { doctors, authState, currency, navigate, userAppointments } = useContext(Context);

  const doctor = useMemo(() => {
    return doctors.find((doc) => doc._id === id);
  }, [id, doctors]);

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const [method, setMethod] = useState('');

  const getAvailableSlots = () => {
    if (!doctor) return;
    const today = new Date(); // today = Thu Jun 05 2026 16:25:37

    for (let i = 0; i < 7; i++) { // i = 6
      // setting date with index for next 7 days
      const currentDate = new Date(today); // currentDate = Thu Jun 05 2026 16:25:37 
      currentDate.setDate(today.getDate() + i); // currentDate = Thu Jun 11 2026 16:25:37 // i = 6

      // setting end time of the date with index  
      const endTime = new Date(); // endTime = Thu Jun 05 2026 16:25:37
      endTime.setDate(today.getDate() + i);  // endTime = Thu Jun 11 2026 16:25:37 // i = 6
      endTime.setHours(21, 0, 0, 0); // endTime = Thu Jun 11 2026 21:00:00

      // setting hourse and minutes for current date
      if (today.getDate() === currentDate.getDate()) { // 5 === 11 // false
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
        // currentDate = Thu Jun 11 2026 10:00:00 // i = 6
      }

      // time slots
      const timeSlots = []; // local variable

      while (currentDate < endTime) {  // Thu Jun 11 2026 10:00:00  <  Thu Jun 11 2026 21:00:00 // true // i = 6
        const formattedTime = currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

        const day = currentDate.getDate();
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();

        const slotDate = day + "-" + month + "-" + year;
        const slotTime = formattedTime

        const isSlotAvailable = doctor.slots_booked?.[slotDate] && doctor.slots_booked?.[slotDate]?.includes(slotTime) ? false : true;

        if (isSlotAvailable) {
          timeSlots.push({
            dateTime: new Date(currentDate),
            time: formattedTime
          })
        }

        // Slot 1 // currentDate = Thu Jun 11 2026 10:00:00
        // Slot 2 // currentDate = Thu Jun 11 2026 10:30:00
        // Slot 3 // currentDate = Thu Jun 11 2026 11:00:00
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  }

  const bookAppointment = async () => {
    try {
      const date = docSlots[slotIndex][0].dateTime;
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();

      const slotDate = day + "-" + month + "-" + year;

      const paymentMethod = method;
      
      if (authState === 'authenticated' && method === 'cod') {
        const response = await axiosInstance.post(`/api/v1/user/bookappointment`, { id, slotDate, slotTime, paymentMethod });
        if (response.data.success) {
          toast.success(response.data.message);
          userAppointments();
          setTimeout(() => {
            navigate('/appointment')
          }, 2000);
        }
      }
      if (authState === 'authenticated' && method === "stripe") {
        const idempotencyKey = sessionStorage.getItem("stripeCheckoutKey") || crypto.randomUUID();
        sessionStorage.setItem("stripeCheckoutKey", idempotencyKey);
        
        const response = await axiosInstance.post(`/api/v1/user/book-stripe-appointment`, { id, slotDate, slotTime, paymentMethod, idempotencyKey });
        if (response.data.success) {
          // window.location.href = response.data.session_url;
          const { session_url } = response.data;
          window.location.replace(session_url);
          sessionStorage.removeItem("stripeCheckoutKey");
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  }

  useEffect(() => {
    if (doctor) {
      getAvailableSlots();
    }
  }, [doctor]);

  const relatedDoctors = useMemo(() => {
    return doctors.filter((doc) => doc.speciality === doctor.speciality && doc._id !== doctor._id);
  }, [doctors, id]);

  if (!doctor) {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <div className='flex flex-col'>
          <h2 className='mb-5'>Doctor is not found</h2>
          <Link to='/doctors' className='text-center px-2 py-3 bg-blue-600 rounded-md text-white hover:bg-blue-500 transition-all duration-300'>All Doctors</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e]">

      <div className="max-w-7xl sm:mx-auto px-2 sm:px-4 md:px-6 py-10 space-y-8">

        {/* HEADER */}
        <section className="bg-white/70 backdrop-blur rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 relative">
            <img src={doctor.image} alt={doctor.name.slice(0, 10)} className="w-full h-96 object-cover shadow-lg" />

            <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
              <span className="bg-white/90 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <MdVerified /> Board Certified
              </span>

              <span className="bg-white/90 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <MdStar /> 4.9 (2.4k)
              </span>
            </div>
          </div>

          <div className="md:w-1/2 p-6 flex flex-col justify-center gap-5">
            <div>
              <h1 className="text-3xl font-bold">{doctor.name}</h1>
              <p className="text-purple-600 font-semibold">{doctor.speciality}</p>

              <p className="flex items-center gap-2 text-gray-600 mt-2">
                <MdApartment /> {doctor.address.line1}, {doctor.address.line2}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 p-3 rounded-xl text-center">
                <p className="text-xs text-gray-500">Experience</p>
                <p className="font-bold">{doctor.experience}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl text-center">
                <p className="text-xs text-gray-500">Fee</p>
                <p className="font-bold">{currency}{doctor.fees}</p>
              </div>
            </div>

            <div className="flex gap-3 flex-col sm:flex-row">
              <a href="#booking" className="w-full">
                <button className="w-full bg-linear-to-r from-purple-600 to-cyan-500 text-white py-3 rounded-xl flex-1 flex items-center justify-center hover:bg-linear-to-r hover:from-purple-700 hover:to-cyan-600 transition-colors duration-500 cursor-pointer">
                  <MdCalendarMonth /> Book Appointment
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* GRID of ABOUT AND BOOKING */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="booking">

          {/* ABOUT */}
          <div className="lg:col-span-2 space-y-6">

            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-xl font-bold mb-3">About Doctor</h2>
              <p className="text-gray-600 leading-relaxed">
                {doctor.about}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <MdVerified className="text-cyan-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Experience</h4>
                    <p className="text-sm text-gray-600">
                      {doctor.experience}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <MdStar className="text-cyan-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Specialization</h4>
                    <p className="text-sm text-gray-600">
                      {doctor.speciality}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* REVIEWS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border-l-4 border-purple-500">
                <p className="italic text-gray-600">
                  "Best doctor I have ever met. Very professional."
                </p>
                <p className="mt-3 font-bold">— Sarah J.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border-l-4 border-cyan-500">
                <p className="italic text-gray-600">
                  "Explains everything clearly and calmly."
                </p>
                <p className="mt-3 font-bold">— Michael R.</p>
              </div>
            </div>
          </div>

          {/* BOOKING */}
          <aside className="bg-white p-6 rounded-2xl shadow space-y-6">

            <h2 className="text-xl font-bold flex items-center gap-2">
              <MdSchedule /> Booking
            </h2>

            {/* DATE PICKER */}
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-4">
                Select Date
              </p>

              <div className="flex gap-3 overflow-x-auto pb-2">
                {docSlots.map((item, index) => (
                  <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-linear-to-r from-purple-600 to-cyan-500 text-white' : 'border border-gray-300'}`} key={index}>
                    <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                    <p>{item[0] && item[0].dateTime.getDate()}</p>
                  </div>
                ))}
              </div>

            </div>

            {/* slots */}
            <div>
              <p className="text-sm font-semibold mb-2">Afternoon</p>
              <div className="grid grid-cols-3 gap-2">
                {docSlots[slotIndex]?.map((item, index) => (
                  <p onClick={() => setSlotTime(item.time)} className={`flex flex-wrap justify-center text-sm font-light px-1 sm:px-3 md:px-5 py-2 cursor-pointer rounded-md ${item.time === slotTime ? 'bg-linear-to-r from-purple-600 to-cyan-500 text-white' : 'border border-gray-300 text-gray-400'}`} key={index}>
                    {item.time.toLowerCase()}
                  </p>
                ))}
              </div>
            </div>

            <div className="max-w-sm w-full flex flex-col justify-start items-start mt-4 gap-3">
              <h2 className="text-lg font-semibold mb-2">Payment Method</h2>
              <div className="flex justify-between items-center gap-2">
                <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                  <input type="checkbox" required />
                  <p className='text-sm text-gray-500 font-medium mx-4'>CASH ON DELIVERY</p>
                </div>
                <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                  <input type="checkbox" required />
                  <p className='text-sm text-gray-500 font-medium mx-4'>Stripe</p>
                </div>
              </div>
            </div>

            <button onClick={bookAppointment} className="w-full bg-linear-to-r from-purple-600 to-cyan-500 text-white py-3 rounded-xl hover:bg-linear-to-r hover:from-purple-700 hover:to-cyan-600 transition-colors duration-500 cursor-pointer">
              Confirm Appointment
            </button>
          </aside>

        </div>

        {/* RECOMMENDED */}
        <div>
          <Recommended
            name={'Doctors'}
            data={relatedDoctors}
          />
        </div>

      </div>
    </div>
  );
};

export default Detail;
