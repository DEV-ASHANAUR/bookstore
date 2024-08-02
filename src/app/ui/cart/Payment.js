"use client"

export const Payment = () => {
  return (
    <div className="w-full max-w-xs shadow-md bg-white">
      <form className="px-8 pt-6 pb-8 mb-4">
        <div className="mb-2">
          <label className="text-gray-700 text-sm font-bold block mb-2">
            Card Number
          </label>
          <input
            className="py-2 px-3 text-gray-700 rounded w-full border focus:outline-none appearance-none shadow"
            type="text"
            placeholder="Enter Card Number"
          />
        </div>

        <div className="mb-2">
          <label className="text-gray-700 text-sm font-bold block mb-2">
            Name on the Card
          </label>
          <input
            className="py-2 px-3 text-gray-700 rounded w-full border focus:outline-none appearance-none shadow"
            type="text"
            placeholder="Enter Name"
          />
        </div>

        <div className="mb-2">
          <label className="text-gray-700 text-sm font-bold block mb-2">
            Card Expiry
          </label>
          <input
            className="py-2 px-3 text-gray-700 rounded w-full border focus:outline-none appearance-none shadow"
            type="date"
            placeholder="Enter Name"
          />
        </div>

        <div className="mb-2">
          <label className="text-gray-700 text-sm font-bold block mb-2">
            CVV/PIN
          </label>
          <input
            className="py-2 px-3 text-gray-700 rounded w-full border focus:outline-none appearance-none shadow"
            type="password"
            placeholder="Enter CVV or PIN"
          />
        </div>
        <div className="flex items-center justify-between mt-4">
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => makePayment()}
          >
            Make Payment
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Reset Values
          </a>
        </div>
      </form>
    </div>
  );
};
