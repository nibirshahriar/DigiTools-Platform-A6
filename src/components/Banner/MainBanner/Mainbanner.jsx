import React, { use } from "react";
import ProductCard from "./ProductCard";
import Cart from "./cart";

const Mainbanner = ({
  productPromise,
  setActiveTab,
  activeTab,
  setCarts,
  carts,
}) => {
  const products = use(productPromise);
  //   console.log(products);
//   console.log(carts);

  return (
    <div className="py-20 max-w-7xl mx-auto">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold">Premium Digital Tools</h2>
        <p className="text-gray-500">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>

      {/* toggle btns */}
      <div className="tabs tabs-box justify-center bg-transparent mt-6 gap-3">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40 font-bold 
      text-black
    checked:bg-linear-to-r checked:from-[#4F39F6] checked:to-[#9514FA] 
    checked:text-white border-none"
          aria-label="Products"
          onClick={() => setActiveTab("product")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40 font-bold 
   text-black
    checked:bg-linear-to-r checked:from-[#4F39F6] checked:to-[#9514FA] 
    checked:text-white border-none"
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>
      {activeTab === "product" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              setCarts={setCarts}
              carts={carts}
            />
          ))}
        </div>
      )}
      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts} />}
    </div>
  );
};

export default Mainbanner;
