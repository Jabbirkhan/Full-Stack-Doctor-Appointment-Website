import React from 'react'
import DoctorSideBar from "./../../components/doctorComponents/doctorSideBar";
import { Outlet } from 'react-router-dom';

const DoctorHome = () => {
    return (
        <div className="flex gap-2">
            <div>
                <DoctorSideBar />
            </div>
            <div className='flex-1 sm:ml-52'>
                <Outlet />
            </div>
        </div>
    )
}

export default DoctorHome
