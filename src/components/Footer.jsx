
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 md:px-12 lg:px-20 pt-12 pb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">
            Ma<span className="text-[#c49a6c]">Furniture</span>
          </h2>

          <p className="text-gray-400 mt-4 leading-7 text-sm">
            Discover furniture that brings comfort,
            elegance and style to your home.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <div className="flex flex-col gap-3 text-gray-400 text-sm">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/shop" className="hover:text-white">Shop</Link>
            <Link to="/categories" className="hover:text-white">Categories</Link>
            <Link to="/about" className="hover:text-white">About Us</Link>
          </div>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Support</h3>

          <div className="flex flex-col gap-3 text-gray-400 text-sm">
            <Link to="/contact" className="hover:text-white">Contact Us</Link>
            <Link to="/cart" className="hover:text-white">My Cart</Link>
            <p>Furniture & Home Decor</p>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-4 text-2xl">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-[#c49a6c]">
              <i className="ri-instagram-line"></i>
            </a>

            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-[#c49a6c]">
              <i className="ri-facebook-circle-line"></i>
            </a>

            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[#c49a6c]">
              <i className="ri-linkedin-box-line"></i>
            </a>
          </div>

          <p className="text-gray-400 text-sm mt-4">
            Find inspiration for your space.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Ma Furniture. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
