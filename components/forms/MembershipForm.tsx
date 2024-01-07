// MembershipForm.js

import React from 'react';

const MembershipForm = () => {
  // Handle form submission logic here

  return (
    <form className="bg-white p-8 rounded shadow-md text-justify">

      {/* Name */}
      <div className="mb-4">
        <label className="block text-[#646464] text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Your Name"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-[#646464] text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Your Email"
        />
      </div>

      {/* Phone */}
      <div className="mb-4">
        <label className="block text-[#646464] text-sm font-bold mb-2" htmlFor="phone">
          Phone
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phone"
          type="tel"
          placeholder="Your Phone"
        />
      </div>

      {/* Occupation */}
      <div className="mb-4">
        <label className="block text-[#646464] text-sm font-bold mb-2" htmlFor="occupation">
          Occupation
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="occupation"
          type="text"
          placeholder="Your Occupation"
        />
      </div>

      {/* Employer */}
      <div className="mb-4">
        <label className="block text-[#646464] text-sm font-bold mb-2" htmlFor="employer">
          Employer
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="employer"
          type="text"
          placeholder="Your Employer"
        />
      </div>

      <button
        type="submit"
        className="bg-primary-green text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Join Now
      </button>
    </form>
  );
};

export default MembershipForm;
