import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdPublic, MdShare, MdSend } from "react-icons/md";

const Footer = () => {

  const location = useLocation();
    if (location.pathname === '/login' || location.pathname === '/user-forget-password' || location.pathname === '/verify-email' || location.pathname === '/privacy-policy' || location.pathname === '/terms-of-service') {
    return null;
  }

  return (
    <div>
      {/* FOOTER (FULL ORIGINAL STRUCTURE) */}
      <footer className="bg-white border-t py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-2xl font-bold text-purple-600">Medora</h2>
            <p className="text-gray-500 mt-4">
              Comprehensive medical appointment platform for modern healthcare.
            </p>

            <div className="flex gap-3 mt-4">
              <MdPublic className="text-xl text-purple-600" />
              <MdShare className="text-xl text-purple-600" />
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Platform</h3>
            <ul>
              <li className="hover:text-purple-600 cursor-pointer">How it Works</li>
              <li className="hover:text-purple-600 cursor-pointer">Doctor Search</li>
              <li className="hover:text-purple-600 cursor-pointer">Patient Portal</li>
              <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul>
              <Link to='/about' className="hover:text-purple-600 cursor-pointer">
                About Us
              </Link>
              <Link to='/contact' className="hover:text-purple-600 cursor-pointer">
                Contact
              </Link>
              <li className="hover:text-purple-600 cursor-pointer">FAQ</li>
              <li className="hover:text-purple-600 cursor-pointer">Support</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Newsletter</h3>
            <p className="text-gray-500 text-sm mb-3">
              Subscribe for updates
            </p>

            <div className="flex">
              <input
                className="border p-3 w-full rounded-l-xl"
                placeholder="Email"
              />
              <button className="bg-linear-to-r from-purple-600 to-cyan-500 text-white px-4 rounded-r-xl">
                <MdSend />
              </button>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 mt-10 border-t pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p>© 2024 Medora Healthcare</p>
          <div className="flex gap-6">
            <Link to='/privacy-policy'>Privacy Policy</Link>
            <Link to='/terms-of-service'>Terms of Service</Link>
          </div>
        </div>

      </footer>
    </div>
  )
}

export default Footer
