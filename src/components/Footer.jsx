/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
  <footer>
    <div className='h-20 bg-slate-700'></div>
    <div className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">ShopEase</h3>
          <p className="text-sm text-gray-400">
            Your one-stop shop for everything you love. We bring the best products right to your door.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-300">Home</a></li>
            <li><a href="#" className="hover:text-yellow-300">Shop</a></li>
            <li><a href="#" className="hover:text-yellow-300">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-300">Contact</a></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Budaun, Uttar Pradesh</li>
            <li>Email: tg6398119861@gmail.com</li>
            <li>Phone: +1 (91) 7060579132</li>
          </ul>
        </div>
        
        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-blue-500"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-blue-600"><FaLinkedin size={24} /></a>
          </div>
        </div>

      </div>
      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </div>
  </footer>
  );
};

export default Footer;

