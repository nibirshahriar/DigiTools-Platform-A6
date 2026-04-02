import React from 'react';

const ReadyToTransBanner = () => {
    return (
      <div className="mt-20 bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-20 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-sm md:text-base opacity-80 max-w-xl mx-auto mb-8">
          Join thousands of professionals who are already using DigiTools to
          work smarter. Start your free trial today.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
          <button className="btn rounded-full px-6 bg-white text-black border-none">
            Explore Products
          </button>

          <button className="btn rounded-full px-6 bg-transparent border border-white text-white hover:bg-white hover:text-black transition">
            View Pricing
          </button>
        </div>
        <p className="text-xs opacity-70">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    );
};

export default ReadyToTransBanner;