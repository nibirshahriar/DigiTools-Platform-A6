import React, { use } from "react";
import ProductCard from "./ProductCard";

const Mainbanner = ({ productPromise }) => {
  const products = use(productPromise);
//   console.log(products);

  return (
    <div className="py-20 max-w-7xl mx-auto">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold">Premium Digital Tools</h2>
        <p className="text-gray-500">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {products.map((product) =>  
<ProductCard key={product.id} product={product}/>
)}
      </div>
    </div>
  );
};

export default Mainbanner;
