import React from "react";
import { FaCheck } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { name, description, price, period, tag, features, icon } = product;

  return (
    <div className="relative p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg">
      {tag && (
        <span className="absolute top-4 right-4 bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full font-medium">
          {tag}
        </span>
      )}

      <div className="w-14 h-14 flex items-center justify-center text-2xl mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
      <p className="text-gray-500 mt-2 text-sm leading-relaxed">
        {description}
      </p>
      <div className="mt-4 text-2xl font-bold text-gray-800">
        ${price}
        <span className="text-sm font-normal text-gray-500">/{period}</span>
      </div>
      <ul className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-600 text-sm">
            <FaCheck className="text-green-500 text-xs" />
            {feature}
          </li>
        ))}
      </ul>
      <button className="mt-6 w-full py-3 rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 transition">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
