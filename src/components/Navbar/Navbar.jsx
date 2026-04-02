import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className=" border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="flex items-center gap-1 font-bold text-xl">
              <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                DigiTools
              </span>
            </div>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal gap-10 px-1 text-lg">
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-5 items-center">
            <span className="text-2xl flex items-center">
              <CiShoppingCart />
            </span>
            <button className="font-bold">Login</button>
            <a className="btn rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
