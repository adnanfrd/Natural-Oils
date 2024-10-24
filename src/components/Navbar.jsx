'use client';
import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp, FaSignInAlt, FaUser } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="bg-[#F96167] border-b border-gray-200">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-3 px-4 space-y-4 sm:space-y-0">
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center">
          <a href="tel:+923017283867" className="flex items-center text-white">
            <FaPhoneAlt className="mr-2" />
            +92 (301) 728-38-67
          </a>
          <a
            href="https://wa.me/923017283867"
            target="_blank"
            className="flex items-center text-white"
          >
            <FaWhatsapp className="mr-2" />
            +92 (301) 728-38-67
          </a>
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center">
          <div className="flex items-center space-x-2 text-white">
            <FaSignInAlt className="mr-1" />
            <Link href="/login" className="text-white">
              Sign In
            </Link>
            <span className="hidden sm:block">|</span>
            <FaUser className="mr-1" />
            <Link href="/signup" className="text-white">
              Sign Up
            </Link>
          </div>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 text-white focus:outline-none"
            >
              <FaUser />
              <span>Profile</span>
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-10">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/myaccount">My Account</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/logout">Log Out</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
