import React from "react";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const handlePayment = () => {
    setCarts([]);
    toast.success("Payment successful!");
  };
  const handleRemove = (id) => {
    const filteredCart = carts.filter((item) => item.id !== id);
    toast.error("Item removed from cart!");
    setCarts(filteredCart);
  };
  const total = carts.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 border border-transparent rounded-2xl bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

      {carts.length === 0 ? (
        <p className="text-center text-gray-400 py-6 bg-gray-100 rounded-lg">
          Your Cart Is Empty
        </p>
      ) : (
        <>
          <div className="space-y-4">
            {carts.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 text-sm font-medium cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-6 text-sm text-gray-600">
            <span>Total</span>
            <span className="font-semibold text-black">${total}</span>
          </div>
          <button
            onClick={() => handlePayment()}
            className="mt-6 w-full py-3 rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] cursor-pointer"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
