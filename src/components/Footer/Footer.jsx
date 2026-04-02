import React from "react";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#0B1220] text-gray-400 px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-6 gap-10">
        <div className="md:col-span-2">
          <h2 className="text-white text-2xl font-bold mb-4">DigiTools</h2>
          <p className="text-sm leading-relaxed max-w-sm">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Templates</li>
            <li className="hover:text-white cursor-pointer">Integrations</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Press</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Documentation</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Community</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Social Links</h3>
          <div className="flex gap-3">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black cursor-pointer hover:scale-110 transition">
              <FaFacebookF size={14} />
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black cursor-pointer hover:scale-110 transition">
              <FaLinkedinIn size={14} />
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black cursor-pointer hover:scale-110 transition">
              <FaXTwitter size={14} />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© 2026 DigiTools. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-white cursor-pointer">
            Terms of Service
          </span>
          <span className="hover:text-white cursor-pointer">Cookies</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
