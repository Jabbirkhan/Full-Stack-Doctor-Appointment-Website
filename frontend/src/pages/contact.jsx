import React, { useContext, useEffect, useState } from "react";
import {MdMail,MdCall,MdLocationOn,MdSend,MdCheckCircle,MdAutorenew} from "react-icons/md";
import { Context } from "../context/context";
import axiosInstance from "../utils/axiosInstance.js";
import Loader from "../components/loader.jsx";
import { toast } from "react-toastify";

const Contact = () => {  
  const { authState, navigate } = useContext(Context);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const sendContactMessage = async (e) => {
        e.preventDefault();
        try {
            if (authState !== 'authenticated') {
                return navigate('/login');
            }

            setLoader(true);
            const response = await axiosInstance.post(`/api/v1/user/send-contact-message`, { name, email, subject, message });
            if (response.data.success) {
                toast.success(response.data.message);
            }

        } catch (error) {
            toast.error(error.response?.data?.message);
        } finally {
            setLoader(false);
        }
    }

    if (loader) {
        return <Loader />
    }

  // simple parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const mapImg = document.querySelector("[data-map]");
      if (mapImg) {
        const speed = 0.1;
        mapImg.style.transform = `translateY(${-(window.scrollY * speed)}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-10 py-10 min-h-screen bg-background text-on-surface">
      {/* Header */}
      <header className="mb-10 max-w-2xl">
        <h1 className="text-4xl font-bold text-primary mb-3">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-lg">
          Our dedicated medical support team is here to assist you with appointments,
          medical inquiries, and general information.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* LEFT SIDE */}
        <div className="md:col-span-6 lg:col-span-5 space-y-8">
          <div className="backdrop-blur-xl bg-white/70 p-6 rounded-xl shadow-lg space-y-6">
            {/* Email */}
            <div className="flex gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <MdMail size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <p className="text-gray-600">support@medora.healthcare</p>
                <p className="text-gray-600">info@medora.healthcare</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <MdCall size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-gray-600">Mon-Fri: 8am - 8pm EST</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <MdLocationOn size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Visit Our Clinic</h3>
                <p className="text-gray-600">1200 Healthcare Plaza, Suite 400</p>
                <p className="text-gray-600">New York, NY 10001</p>
              </div>
            </div>
          </div>

          {/* MAP */}
          <div className="relative h-75 rounded-xl overflow-hidden shadow-lg">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425289.99053323205!2d72.75643905071773!3d33.61625093699601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1780570647834!5m2!1sen!2s" 
            loading="lazy" 
            className="w-full h-full object-cover grayscale opacity-80"
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="md:col-span-6 lg:col-span-7">
          <div className="relative backdrop-blur-xl bg-white/70 p-8 md:p-10 rounded-xl shadow-lg overflow-hidden">
            <form onSubmit={sendContactMessage} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  name="name"
                  onChange={(e) => setName(e.target.value)} value={name}
                  placeholder="Full Name"
                  className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
                />
                <input
                  name="email"
                  onChange={(e) => setEmail(e.target.value)} value={email}
                  placeholder="Email Address"
                  className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
                />
              </div>

              <select
                name="subject"
                onChange={(e) => setSubject(e.target.value)} value={subject}
                className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              >
                <option>Appointment Scheduling</option>
                <option>Medical Records Request</option>
                <option>Billing & Insurance</option>
                <option>General Inquiry</option>
              </select>

              <textarea
                name="message"
                rows="6"
                onChange={(e) => setMessage(e.target.value)} value={message}
                placeholder="How can we help?"
                className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none resize-none"
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-semibold bg-linear-to-r from-purple-600 to-cyan-400 hover:shadow-lg transition"
              >
                    Send Message 
              </button>

              <p className="text-center text-sm text-gray-500 mt-2">
                By submitting this form, you agree to our Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;