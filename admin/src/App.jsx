import React, { useContext, lazy, Suspense } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Context } from './context/context';
import Loader from './components/loader';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallBack from "./components/errorBoundary";
import PreLogin from './pages/preLogin';
import Home from './pages/home';
import DoctorHome from './pages/doctorPages/doctorHome';
import AdminForgetPassword from './pages/adminForgetPassword';
import DoctorForgetPassword from './pages/doctorPages/doctorForgetPassword';

const AdminLogin = lazy(() => import('./pages/adminLogin'));
const DoctorLogin = lazy(() => import('./pages/doctorPages/doctorLogin'));
const AddDoctor = lazy(() => import('./pages/addDoctor'));
const Doctors = lazy(() => import('./pages/doctors'));
const Appointments = lazy(() => import('./pages/appointments'));
const DoctorProfile = lazy(() => import('./pages/doctorPages/doctorProfile'));
const DoctorAppointments = lazy(() => import('./pages/doctorPages/doctorappointments'));
const NotFound = lazy(() => import('./pages/notFound'));

const App = () => {

  const { auth } = useContext(Context);
  const location = useLocation();

  if (auth.status === 'checking') {
    return <Loader />
  }

  if (auth.status === 'unauthenticated' && location.pathname !== '/login' && location.pathname !== '/admin-login' && location.pathname !== '/doctor-login' && location.pathname !== '/admin-forget-password' && location.pathname !== '/doctor-forget-password') {
    return <Navigate to='/login' replace />
  }

  return (
    <main>
      <ToastContainer />
      <div>
        <ErrorBoundary fallbackComponent={ErrorFallBack} onReset={() => window.location.reload()}>
          <Suspense fallback={<Loader />}>
            <Routes>
              {auth.role === 'admin' && (
                <>
                  <Route path='/' element={<Home />}>
                    <Route index element={<AddDoctor />} />
                    <Route path='doctors' element={<Doctors />} />
                    <Route path='appointments' element={<Appointments />} />
                  </Route>
                </>
              )}
              {auth.role === 'doctor' && (
                <>
                  <Route path='/' element={<DoctorHome />}>
                    <Route index element={<DoctorProfile />} />
                    <Route path='appointments' element={<DoctorAppointments />} />
                  </Route>
                </>
              )}
              <Route path='/login' element={<PreLogin />} />
              <Route path='/admin-login' element={auth.status === 'authenticated' ? <Navigate to='/' replace /> : <AdminLogin />} />
              <Route path='/doctor-login' element={auth.status === 'authenticated' ? <Navigate to='/' replace /> : <DoctorLogin />} />
              <Route path='/admin-forget-password' element={<AdminForgetPassword />} />
              <Route path='/doctor-forget-password' element={<DoctorForgetPassword />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  )
}

export default App
