import React from "react";
import img1 from "../../../assets/user.png";
import img2 from "../../../assets/package.png";
import img3 from "../../../assets/rocket.png";
const GetStartBanner = () => {
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-5xl font-bold">Get Started in 3 Steps</h2>
        <p className="text-gray-500">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="relative p-18 rounded-2xl bg-white border border-gray-200 shadow-sm text-center hover:shadow-md transition">
          <span className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs rounded-full">
            01
          </span>
          <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-purple-200 text-purple-600 text-xl mb-4">
            <img src={img1} alt="" className="w-8 h-8" />
          </div>
          <h3 className="font-semibold text-lg">Create Account</h3>
          <p className="text-gray-500 text-sm mt-2">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>



        <div className="relative p-18 rounded-2xl bg-white border border-gray-200 shadow-sm text-center hover:shadow-md transition">
          <span className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs rounded-full">
            02
          </span>
          <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-purple-200 text-purple-600 text-xl mb-4">
            <img src={img2} alt="" className="w-8 h-8" />
          </div>
          <h3 className="font-semibold text-lg">Choose Products</h3>
          <p className="text-gray-500 text-sm mt-2">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        <div className="relative p-18 rounded-2xl bg-white border border-gray-200 shadow-sm text-center hover:shadow-md transition">
          <span className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs rounded-full">
            03
          </span>

          <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-purple-200 text-purple-600 text-xl mb-4">
            <img src={img3} alt="" className="w-8 h-8" />
          </div>

          <h3 className="font-semibold text-lg">Start Creating</h3>
          <p className="text-gray-500 text-sm mt-2">
            Download and start using your premium tools immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStartBanner;
