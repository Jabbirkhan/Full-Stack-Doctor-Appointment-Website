// version 2 
import React, { useState, useContext } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { Context } from '../context/context';
import { toast } from 'react-toastify';
import axiosInstance from '../utils/axiosInstance.js';

const SideBar = () => {

    const { setAuth, navigate } = useContext(Context);
    const location = useLocation();

    if(location.pathname === '/login' || location.pathname === '/admin-login' || location.pathname === '/admin-forget-password'){
        return null;
    }

    const [visible, setVisible] = useState(false);

    const handleLogout = async () => {
        try {
            const response = await axiosInstance.post('/api/v1/admin/logout', {}); // POST accept three parameters, but GET accept only two parameters, so we pass an empty object as the second parameter
            if (response.data.success) {
                toast.success(response.data.message || "Logout successfully");
                setAuth({
                    status: 'unauthenticated',
                    role: null
                });
                navigate('/login');
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    }

    return (
        <aside aria-label='aside-bar'>

            {/* Desktop Sidebar */}
            <div className='hidden sm:block fixed top-0 left-0 bg-white p-2 px-5 h-screen w-52'>

                {/* Sidebar menu */}
                <nav aria-label='navbar' className='flex flex-col justify-start items-start'>

                    <div className='flex justify-start items-center gap-1 mb-5'>
                        <div className='flex'>
                            <h2 className='text-xl font-bold'>Medora</h2>
                        </div>
                    </div>

                    <ul className='flex flex-col gap-1 w-full'>
                        <NavLink to='/' className='hover:bg-gray-200/50 rounded-md px-2 py-1.25 transition-all duration-300'>Add Doctor</NavLink>
                        <NavLink to='/doctors' className='hover:bg-gray-200/50 rounded-md px-2 py-1.25 transition-all duration-300'>All Doctors</NavLink>
                        <NavLink to='/appointments' className='hover:bg-gray-200/50 rounded-md px-2 py-1.25 transition-all duration-300'>All Appointments</NavLink>
                    </ul>

                </nav>

                {/* logout button */}
                <div className='w-full absolute bottom-4 left-0 flex justify-between items-center p-2 bg-gray-300'>

                    <div className='flex items-center gap-2'>
                        <p className='text-sm text-gray-500'>Super Admin</p>
                    </div>

                    <div>
                        <FaSignOutAlt onClick={handleLogout} className='text-red-500 cursor-pointer' />
                    </div>

                </div>

            </div>


            {/* Mobile Hamburger */}
            <div className='sm:hidden fixed top-3 left-1 text-xl py-3 px-3 hover:text-blue-600 transition-all duration-200'>
                <FaBars onClick={() => setVisible(true)} />
            </div>

            {/* Overlay */}
            {visible && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 sm:hidden"
                    onClick={() => setVisible(false)}
                ></div>
            )}

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 left-0 h-screen w-64 bg-white p-2 px-5 z-50 transform transition-transform duration-300 sm:hidden
        ${visible ? "translate-x-0" : "-translate-x-full"}`}>

                {/* Sidebar menu */}
                <nav className='flex flex-col justify-start items-start'>

                    <div className='flex justify-start items-center gap-1 mb-10'>
                        <div className='flex flex-col'>
                            <h2 className='text-xl font-bold uppercase'>Medora</h2>
                        </div>
                    </div>

                    <ul className='flex flex-col gap-1 w-full'>
                        <NavLink to='/' className='hover:bg-gray-200/50 rounded-md px-2 py-1.25 transition-all duration-300'>Add Doctor</NavLink>
                        <NavLink to='/doctors' className='hover:bg-gray-200/50 rounded-md px-2 py-1.25 transition-all duration-300'>All Doctors</NavLink>
                        <NavLink to='/appointments' className='hover:bg-gray-200/50 rounded-md px-2 py-1.25 transition-all duration-300'>All Appointments</NavLink>
                    </ul>

                    {/* logout button */}
                    <div className='w-full absolute bottom-0 left-0 flex justify-between items-center p-2 bg-gray-300'>

                        <div className='flex items-center gap-2'>
                            <div className='flex flex-col'>
                                <p className='text-sm text-gray-500'>Super Admin</p>
                            </div>
                        </div>

                        <div>
                            <FaSignOutAlt onClick={handleLogout} className='text-red-500 cursor-pointer' />
                        </div>

                    </div>

                </nav>

            </div>

        </aside>
    )
}

export default SideBar
