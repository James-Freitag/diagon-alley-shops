import React from "react";

const Checkout = () => {
  return (
    <main className="min-h-screen bg-[#fdfaf6] text-[#1a1a1a] px-6 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold text-[#5c4033] mb-6 text-center">
          Checkout
        </h1>

        {/* Billing Information */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#5c4033] mb-4">
            Billing Information
          </h2>
          <form className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 rounded p-2"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 rounded p-2"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded p-2 sm:col-span-2"
            />
            <input
              type="text"
              placeholder="Street Address"
              className="border border-gray-300 rounded p-2 sm:col-span-2"
            />
            <input
              type="text"
              placeholder="City"
              className="border border-gray-300 rounded p-2"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="border border-gray-300 rounded p-2"
            />
          </form>
        </section>

        {/* Payment Details */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#5c4033] mb-4">
            Payment Details
          </h2>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Card Number"
              className="border border-gray-300 rounded p-2"
            />
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Expiration Date (MM/YY)"
                className="border border-gray-300 rounded p-2"
              />
              <input
                type="text"
                placeholder="CVC"
                className="border border-gray-300 rounded p-2"
              />
            </div>
          </form>
        </section>

        {/* Order Summary */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#5c4033] mb-4">
            Order Summary
          </h2>
          <div className="flex justify-between">
            <span>Total:</span>
            <span className="font-bold">90 Galleons</span>
          </div>
        </section>

        <button className="w-full bg-[#c9a66b] text-white py-3 rounded hover:bg-[#4b2e2e] transition cursor-pointer">
          Place Order
        </button>
      </div>
    </main>
  );
};

export default Checkout;
