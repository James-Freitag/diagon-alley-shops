"use client";

import { useForm, SubmitHandler } from "react-hook-form";

type CheckoutFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  cardNumber: string;
  expiration: string;
  cvc: string;
};

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormInputs>();

  const onSubmit: SubmitHandler<CheckoutFormInputs> = (data) => {
    console.log("Form submitted:", data);
    alert(
      "Your order has been placed. Thank you for shopping at Diagon Alley!"
    );
  };

  return (
    <main className="min-h-screen bg-[#fdfaf6] text-[#1a1a1a] px-6 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold text-[#5c4033] mb-6 text-center">
          Checkout
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#5c4033] mb-4">
              Billing Information
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                {...register("firstName", { required: true })}
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded p-2"
              />
              {errors.firstName && (
                <p className="text-red-600 text-sm">First name is required.</p>
              )}
              <input
                {...register("lastName", { required: true })}
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded p-2"
              />
              {errors.lastName && (
                <p className="text-red-600 text-sm">Last name is required.</p>
              )}
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded p-2 sm:col-span-2"
              />
              {errors.email && (
                <p className="text-red-600 text-sm">Email is required</p>
              )}
              <input
                {...register("address", { required: true })}
                type="text"
                placeholder="Street Address"
                className="border border-gray-300 rounded p-2 sm:col-span-2"
              />
              {errors.address && (
                <p className="text-red-600 text-sm">street is required</p>
              )}

              <input
                {...register("city", { required: true })}
                type="text"
                placeholder="City"
                className="border border-gray-300 rounded p-2"
              />
              {errors.city && (
                <p className="text-red-600 text-sm">City is required</p>
              )}
              <input
                {...register("postalCode", { required: true })}
                type="text"
                placeholder="Postal Code"
                className="border border-gray-300 rounded p-2"
              />
              {errors.postalCode && (
                <p className="text-red-600 text-sm">Postal Code is required</p>
              )}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#5c4033] mb-4">
              Payment Details
            </h2>
            <div className="grid gap-4">
              <input
                {...register("cardNumber", { required: true })}
                type="text"
                placeholder="Card Number"
                className="border border-gray-300 rounded p-2"
              />
              {errors.cardNumber && (
                <p className="text-red-600 text-sm">Enter valid card number</p>
              )}
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  {...register("expiration", { required: true })}
                  type="text"
                  placeholder="Expiration Date (MM/YY)"
                  className="border border-gray-300 rounded p-2"
                />
                {errors.expiration && (
                  <p className="text-red-600 text-sm">Enter expiration date</p>
                )}
                <input
                  {...register("cvc", { required: true })}
                  type="text"
                  placeholder="CVC"
                  className="border border-gray-300 rounded p-2"
                />
                {errors.cvc && (
                  <p className="text-red-600 text-sm">
                    Enter your cards 3 digit cvc
                  </p>
                )}
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-[#5c4033] mb-4">
              Order Summary
            </h2>
            <div className="flex justify-between">
              <span>Total:</span>
              <span className="font-bold">90 Galleons</span>
            </div>
          </section>

          <button
            type="submit"
            className="w-full bg-[#c9a66b] text-white py-3 rounded hover:bg-[#4b2e2e] transition cursor-pointer"
          >
            Place Order
          </button>
        </form>
      </div>
    </main>
  );
};

export default Checkout;
