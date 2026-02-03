"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const countries = [
  { id: 1, name: "United Kingdom", flag: "/united kingdom.svg", code: "+44" },
  { id: 2, name: "United States", flag: "/united states.svg", code: "+1" },
  { id: 3, name: "Canada", flag: "/canada.svg", code: "+1" },
  { id: 4, name: "Australia", flag: "/australia.svg", code: "+61" },
  { id: 5, name: "Uganda", flag: "/uganda.svg", code: "+256" },
  { id: 6, name: "France", flag: "/france.svg", code: "+33" },
  { id: 7, name: "Somalia", flag: "/somalia.svg", code: "+252" },
  { id: 8, name: "Pakistan", flag: "/pakistan.svg", code: "+92" },
  { id: 9, name: "Norway", flag: "/norway.svg", code: "+47" },
  { id: 10, name: "Ireland", flag: "/ireland.svg", code: "+353" },
  { id: 11, name: "Nigeria", flag: "/nigeria.svg", code: "+234" },
  { id: 12, name: "Kenya", flag: "/kenya.svg", code: "+254" },
  { id: 13, name: "India", flag: "/india.svg", code: "+91" },
];

export default function PersonalDetails() {
  const [open, setOpen] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState(countries[0]);

  return (
    <main className="w-full bg-white flex items-center justify-center">
      <div className="w-full max-w-6xl flex min-h-screen">

        {/* LEFT IMAGE */}
        <div className="hidden lg:flex w-[48%] h-screen relative">
          <Image
            src="/signin-image.svg"
            alt="Sign in illustration"
            fill
            className="object-cover rounded-l-2xl"
            priority
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full lg:w-[52%] flex flex-col justify-center px-6 sm:px-14 relative h-screen">

          {/* Top Right Logo */}
          <div className="absolute top-0 right-0">
            <Image
              src="/signup-logo.svg"
              alt="Faremint Logo"
              width={180}
              height={180}
              className="object-contain"
            />
          </div>

          <div className="max-w-md mx-auto w-full">
            <h1 className="text-2xl font-semibold text-[#0A1B44] mb-2">
              Finish setting up your account
            </h1>
            <p className="text-sm text-gray-500 mb-8">
              Please provide your legally valid information
            </p>

            {/* Sending From — DROPDOWN */}
            <div className="mb-5 relative">
              <label className="block text-sm mb-2 text-gray-600">
                Sending from <span className="text-red-500">*</span>
              </label>

              <button
                type="button"
                onClick={() => setOpen(!open)}
                className={`w-full flex items-center gap-3 border rounded-md px-4 py-3 bg-white
                  ${open ? "border-[#635BFF] ring-2 ring-[#E5E7FF]" : "border-gray-300"}
                  hover:border-[#635BFF] transition`}
              >
                <Image
                  src={selectedCountry.flag}
                  alt={selectedCountry.name}
                  width={20}
                  height={20}
                />
                <span className="text-sm text-gray-800">{selectedCountry.name}</span>

                <svg
                  className={`ml-auto w-4 h-4 text-gray-400 transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {open && (
                <div className="absolute z-30 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-56 overflow-y-auto">
                  {countries.map((country) => (
                    <div
                      key={country.id}
                      onClick={() => {
                        setSelectedCountry(country);
                        setOpen(false);
                      }}
                      className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-50 transition"
                    >
                      <Image src={country.flag} alt={country.name} width={20} height={20} />
                      <span className="text-sm text-gray-800">{country.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Phone Number */}
            <div className="mb-5">
              <label className="block text-sm mb-2 text-gray-600">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-3 border border-gray-300 rounded-md px-3 py-3">
                <Image src={selectedCountry.flag} alt={selectedCountry.name} width={20} height={20} />
                <span className="text-sm text-gray-700">{selectedCountry.code}</span>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full text-sm focus:outline-none"
                />
              </div>
            </div>

            {/* City */}
            <div className="mb-5">
              <label className="block text-sm mb-2 text-gray-600">City <span className="text-red-500">*</span></label>
              <input
                type="text"
                placeholder="Enter City"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none"
              />
            </div>

            {/* Address */}
            <div className="mb-5">
              <div className="flex justify-between mb-2">
                <label className="text-sm text-gray-600">Address <span className="text-red-500">*</span></label>
                <span className="text-xs text-black cursor-pointer">Why do we need this</span>
              </div>
              <input
                type="text"
                placeholder="Address"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none"
              />
            </div>

            {/* Postal Code */}
            <div className="mb-8">
              <label className="block text-sm mb-2 text-gray-600">Postal Code <span className="text-red-500">*</span></label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none"
              />
            </div>

            {/* Finish Button */}
            <Link href="userdashboard">
              <button className="w-full bg-[#635BFF] hover:bg-[#544CFF] text-white py-3 rounded-xl font-medium transition">
                Finish
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
