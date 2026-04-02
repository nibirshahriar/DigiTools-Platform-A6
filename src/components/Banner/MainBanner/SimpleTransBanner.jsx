import React from "react";
import { TiTick } from "react-icons/ti";

const SimpleTransBanner = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 mt-3">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow-md border border-gray-200 rounded-2xl">
          <div className="card-body">
            <h2 className="text-lg font-bold">Starter</h2>
            <p className="text-sm text-gray-400">Perfect for getting started</p>

            <h2 className="text-3xl font-bold mt-2">
              $0<span className="text-sm font-normal">/Month</span>
            </h2>

            <ul className="mt-6 flex flex-col gap-2 text-sm text-gray-600">
              {[
                "Access to 10 free tools",
                "Basic templates",
                "Community support",
                "1 project per month",
              ].map((item, i) => (
                <li key={i}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <button className="btn mt-6 w-full rounded-full text-white border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
              Get Started Free
            </button>
          </div>
        </div>
        <div className="card bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-xl rounded-2xl relative scale-105">
          {/* Badge */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="bg-yellow-300 text-black text-xs px-3 py-1 rounded-full font-semibold">
              Most Popular
            </span>
          </div>

          <div className="card-body">
            <h2 className="text-lg font-bold">Pro</h2>
            <p className="text-sm opacity-80">Best for professionals</p>

            <h2 className="text-3xl font-bold mt-2">
              $29<span className="text-sm font-normal">/Month</span>
            </h2>

            <ul className="mt-6 flex flex-col gap-2 text-sm">
              {[
                "Access to all premium tools",
                "Unlimited templates",
                "Priority support",
                "Unlimited projects",
                "Cloud sync",
                "Advanced analytics",
              ].map((item, i) => (
                <li key={i}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <button className="btn mt-6 w-full rounded-full bg-white text-black border-none">
              Start Pro Trial
            </button>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md border border-gray-200 rounded-2xl">
          <div className="card-body">
            <h2 className="text-lg font-bold">Enterprise</h2>
            <p className="text-sm text-gray-400">For teams and businesses</p>

            <h2 className="text-3xl font-bold mt-2">
              $99<span className="text-sm font-normal">/Month</span>
            </h2>

            <ul className="mt-6 flex flex-col gap-2 text-sm text-gray-600">
              {[
                "Everything in Pro",
                "Team collaboration",
                "Custom integrations",
                "Dedicated support",
                "SLA guarantee",
                "Custom branding",
              ].map((item, i) => (
                <li key={i}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <button className="btn mt-6 w-full rounded-full text-white border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleTransBanner;
