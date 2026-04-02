import React from "react";
import bannerIMG from "../../assets/banner.png";
import badgeIMG from "../../assets/bn.png";
import { CiPlay1 } from "react-icons/ci";
const Banner = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <span className="flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-purple-100 text-purple-600 font-medium w-fit">
            <img src={badgeIMG} alt="icon" className="w-4 h-4" />
            New: AI-Powered Tools Available
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="text-gray-400 mt-4">
            Access premium AI tools, design assets, templates, and productivity <br />
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] cursor-pointer">
              Explore Products
            </button>

            <button className="px-6 py-3 rounded-full border border-purple-500 text-purple-600 flex items-center gap-2 cursor-pointer active:text-white active:bg-linear-to-r active:from-[#4F39F6] active:to-[#9514FA]">
              <CiPlay1 /> Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={bannerIMG}
            alt="banner"
            className="rounded-xl shadow-lg w-[400px] md:w-[450px]"
          />
        </div>
      </div>

      <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-3 text-center text-white">
          <div>
            <h2 className="text-3xl font-bold">50K+</h2>
            <p className="text-sm opacity-80">Active Users</p>
          </div>

          <div className="border-x border-white/30">
            <h2 className="text-3xl font-bold">200+</h2>
            <p className="text-sm opacity-80">Premium Tools</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">4.9</h2>
            <p className="text-sm opacity-80">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
