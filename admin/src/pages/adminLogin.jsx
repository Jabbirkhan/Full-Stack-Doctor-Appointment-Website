import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import {
  FiEye,
  FiEyeOff,
  FiMail,
  FiLock,
  FiUser,
  FiShield,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";
import Loader from "../components/loader.jsx";
import axiosInstance from "../utils/axiosInstance.js";
import { Context } from "../context/context.jsx";

const AdminLogin = () => {
  const { navigate, setAuth } = useContext(Context);

  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("login");

  const [loading, setLoading] = useState(false);

  const onSubmithandler = async (e) => {
    e.preventDefault();
    try {
      if (state === "login") {
        setLoading(true);

        const response = await axiosInstance.post("/api/v1/admin/login", {
          email,
          password,
        });

        if (response.data.success) {
          setAuth({
            status: "authenticated",
            role: response.data.role,
          });

          toast.success(response.data.message || "Admin login successfully");

          navigate("/");
        }
      } else {
        setLoading(true);

        const response = await axiosInstance.post("/api/v1/admin/register", {
          name,
          email,
          password,
        });

        if (response.data.success) {
          toast.success(response.data.message || "Admin register successfully");

          setState("login");
        }
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred during login",
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen w-full bg-slate-100 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-5xl min-h-155 bg-white rounded-2xl shadow-xl overflow-hidden flex">
        {/* ================= LEFT SIDE ================= */}

        <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative overflow-hidden">
          {/* Decorative circles */}

          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-600/20" />

          <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-indigo-600/20" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-white/5" />

          <div className="relative z-10 flex flex-col justify-between w-full p-12 text-white">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
                  <FiShield size={23} />
                </div>

                <div>
                  <h1 className="text-xl font-bold tracking-tight">
                    AdminPanel
                  </h1>

                  <p className="text-xs text-slate-400">Management System</p>
                </div>
              </div>
            </div>

            <div className="max-w-md">
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
                Secure Administration
              </p>

              <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-6">
                Manage your platform with confidence.
              </h2>

              <p className="text-slate-400 leading-relaxed mb-8">
                Access your administrative dashboard and manage your platform,
                users and business operations from one secure place.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <FiCheckCircle className="text-blue-400" size={18} />
                  Secure administrator access
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <FiCheckCircle className="text-blue-400" size={18} />
                  Centralized platform management
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <FiCheckCircle className="text-blue-400" size={18} />
                  Fast and reliable dashboard
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500">Authorized personnel only</p>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10 lg:p-12">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}

            <div className="lg:hidden flex items-center gap-3 mb-8">
              <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                <FiShield size={22} />
              </div>

              <div>
                <h1 className="text-lg font-bold text-slate-900">AdminPanel</h1>

                <p className="text-xs text-slate-500">Management System</p>
              </div>
            </div>

            {/* Header */}

            <div className="mb-8">
              <p className="text-sm font-semibold text-blue-600 mb-2">
                {state === "login" ? "Welcome back" : "Get started"}
              </p>

              <h2 className="text-3xl font-bold text-slate-900">
                {state === "login" ? "Admin Login" : "Create Admin Account"}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {state === "login"
                  ? "Sign in to access your administration dashboard."
                  : "Create your administrator account to continue."}
              </p>
            </div>

            {/* Form */}

            <form onSubmit={onSubmithandler} className="flex flex-col gap-5">
              {/* Name */}

              {state === "register" && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>

                  <div className="relative">
                    <FiUser
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={18}
                    />

                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Email */}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>

                <div className="relative">
                  <FiMail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    placeholder="admin@example.com"
                    required
                  />
                </div>
              </div>

              {/* Password Header */}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Password
                  </label>

                  {state === "login" && (
                    <button
                      type="button"
                      onClick={() => navigate("/admin-forget-password")}
                      className="text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline transition cursor-pointer"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>

                {/* Password Input */}

                <div className="relative">
                  <FiLock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    placeholder="Enter your password"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition cursor-pointer"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <FiEyeOff size={18} />
                    ) : (
                      <FiEye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit */}

              <button
                type="submit"
                className="group w-full mt-2 py-3.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm shadow-lg shadow-blue-600/20 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                {state === "login" ? "Sign In" : "Create Account"}

                <FiArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              {/* Switch Login/Register */}

              <div className="text-center pt-2">
                {state === "login" ? (
                  <p className="text-sm text-slate-500">
                    Don't have an admin account?{" "}
                    <button
                      type="button"
                      onClick={() => setState("register")}
                      className="font-semibold text-blue-600 hover:text-blue-700 hover:underline transition cursor-pointer"
                    >
                      Create account
                    </button>
                  </p>
                ) : (
                  <p className="text-sm text-slate-500">
                    Already have an admin account?{" "}
                    <button
                      type="button"
                      onClick={() => setState("login")}
                      className="font-semibold text-blue-600 hover:text-blue-700 hover:underline transition cursor-pointer"
                    >
                      Sign in
                    </button>
                  </p>
                )}
              </div>
            </form>

            {/* Footer */}

            <div className="mt-10 pt-6 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-400">
                Protected administrator area
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
