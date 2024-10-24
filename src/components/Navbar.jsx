import Link from 'next/link';
import { FaPhoneAlt, FaWhatsapp, FaSignInAlt, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="bg-[#F96167] border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="flex space-x-6">
          <a href="tel:+923017283867" className="flex items-center text-white">
            <FaPhoneAlt className="mr-2" />
            +92 (301) 728-38-67
          </a>
          <a href="https://wa.me/923017283867" className="flex items-center text-white">
            <FaWhatsapp className="mr-2" />
            +92 (301) 728-38-67
          </a>
        </div>

        <div className="flex space-x-6 items-center">
          <Link href="/shipping" className="text-white">Shipping</Link>
          <Link href="/about" className="text-white">About</Link>
          <div className="flex items-center space-x-2 text-white">
            <FaSignInAlt className="mr-1" />
            <Link href="/login" className="text-white">Sign In</Link>
            <span>|</span>
            <FaUser className="mr-1" />
            <Link href="/signup" className="text-white">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
