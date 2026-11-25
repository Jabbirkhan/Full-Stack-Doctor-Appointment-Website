import React, { useContext, lazy, Suspense } from 'react'
import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import { Context } from './context/context';
import { ToastContainer } from 'react-toastify';
import Login from './pages/login';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Loader from './components/loader';
import ErrorFallBack from './components/errorBoundary';
import { ErrorBoundary } from 'react-error-boundary';

const Home = lazy(() => import('./pages/home'));
const Doctors = lazy(() => import('./pages/doctors'));
const Detail = lazy(() => import('./pages/detail'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));
const Appointment = lazy(() => import('./pages/appointment'));
const Profile = lazy(() => import('./pages/profile'));
const VerifyUserEmail = lazy(() => import('./pages/verifyUserEmail'));
const UserForgetPassword = lazy(() => import('./pages/userForgetPassword'));
const Verify = lazy(() => import('./pages/verify'));
const PrivacyPolicy = lazy(() => import('./pages/privacyPolicy'));
const TermsOfService = lazy(() => import('./pages/termsOfService'));
const NotFound = lazy(() => import('./pages/notFound'));

const App = () => {

  const { authState } = useContext(Context);
  const location = useLocation();

  if (authState === 'checking') {
    return <Loader />
  }

  if (authState === 'unauthenticated' && location.pathname !== '/login' && location.pathname !== '/user-forget-password' && location.pathname !== '/verify-email' && location.pathname !== '/privacy-policy' && location.pathname !== '/terms-of-service') {
    return <Navigate to='/login' replace />
  }

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <ErrorBoundary fallbackComponent={ErrorFallBack} onReset={() => window.location.reload()}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/doctors' element={<Doctors />} />
            <Route path='/doctor/:id' element={<Detail />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/appointment' element={<Appointment />} />
            <Route path='/verify' element={<Verify />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={authState !== 'authenticated' ? <Login /> : <Navigate to='/' replace />} />
            <Route path='/verify-email' element={<VerifyUserEmail/>} />
            <Route path='/user-forget-password' element={<UserForgetPassword/>} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-of-service' element={<TermsOfService />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </div>
  )
}

export default App
