import React from "react";

const Cart = () => {
  const cartItems = [
    {
      name: "Elder Wand Replica",
      shop: "Ollivanders",
      price: 50,
      quantity: 1,
      image: "image",
    },
    {
      name: "Hogwarts School Robes",
      shop: "Madam Malkin's",
      price: 20,
      quantity: 2,
      image: "image",
    },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-[#fdfaf6] text-[#1a1a1a] px-6 py-10">
      <h1 className="text-3xl font-bold text-[#5c4033] mb-8 text-center">
        Your Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item, idex) => (
              <li key={idex} className="py-4 flex justify-between items-start">
                <div className="flex space-x-6 items-center">
                  {/* replace with images */}
                  <div className="h-[100px] w-[100px] flex justify-center items-center border-black border">
                    {item.image}
                  </div>
                  <div className="flex flex-col space-y-1">
                    <h2 className="text-lg font-semibold text-[#5c4033]">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-600">{item.shop}</p>
                    <p className="text-sm mt-1">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="text-md font-medium">
                  {item.price * item.quantity} Galleons
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t pt-4 flex justify-between text-lg font-semibold">
            <span>Total:</span>
            <span>{total} Galleons</span>
          </div>

          <div className="mt-6 text-right">
            <a
              href="/checkout"
              className="inline-block bg-[#c9a66b] text-white px-6 py-3 rounded hover:bg-[#4b2e2e] transition"
            >
              Proceed to Checkout
            </a>
          </div>
        </div>
      )}
    </main>
  );
};

export default Cart;
