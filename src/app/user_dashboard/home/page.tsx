"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import AddRecipientCard from "../addrecipitentcard/page";



const countries = [
  { id: 1, name: "United Kingdom", flag: "/united kingdom.svg", currency: "GBP" },
  { id: 2, name: "United States", flag: "/united states.svg", currency: "USD" },
  { id: 3, name: "Canada", flag: "/canada.svg", currency: "CAD" },
  { id: 4, name: "Australia", flag: "/australia.svg", currency: "AUD" },
  { id: 5, name: "Uganda", flag: "/uganda.svg", currency: "UGX" },
  { id: 6, name: "France", flag: "/france.svg", currency: "EUR" },
  { id: 7, name: "Somalia", flag: "/somalia.svg", currency: "SOS" },
  { id: 8, name: "Pakistan", flag: "/pakistan.svg", currency: "PKR" },
  { id: 9, name: "Norway", flag: "/norway.svg", currency: "NOK" },
  { id: 10, name: "Ireland", flag: "/ireland.svg", currency: "EUR" },
  { id: 11, name: "Nigeria", flag: "/nigeria.svg", currency: "NGN" },
  { id: 12, name: "Kenya", flag: "/kenya.svg", currency: "KES" },
  { id: 13, name: "India", flag: "/india.svg", currency: "INR" },
];


// Currency / Exchange Card
const CurrencyForm = () => {

  const [selectedRecipientCountry, setSelectedRecipientCountry] =
  useState(countries.find(c => c.currency === "NGN") || countries[0]);


  const [amount, setAmount] = useState<number>(0);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const [paymentMethod, setPaymentMethod] = useState("Bank Transfer");

  const fee = 2.99;
  const total = amount + fee;
  const recipientGets = amount * 1000; // example conversion rate

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
      {/* Exchange Rate */}
      <div className="bg-[rgba(38,33,100,1)] text-white p-4 rounded-lg mb-6 text-center font-semibold">
        Exchange Rate <br /> 1GBP = 1450.00 NGN
      </div>

      {/* Send Money Form */}
      <div className="flex flex-col gap-4">
      <div>
  <label className="block text-gray-700 font-medium mb-1">
    You send
  </label>

  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
    
    {/* Amount input */}
    <input
      type="number"
      value={amount}
      onChange={(e) => setAmount(Number(e.target.value))}
      className="w-full p-2 outline-none"
    />

    {/* Currency dropdown */}
    <div className="relative border-l border-gray-300 bg-white">
      <select
        value={selectedCountry.currency}
        onChange={(e) =>
          setSelectedCountry(
            countries.find(
              (c) => c.currency === e.target.value
            )!
          )
        }
        className="
          appearance-none
          py-2
          pl-11
          pr-10
          cursor-pointer
          outline-none
          font-medium
          text-gray-800
          bg-transparent
        "
      >
        {countries.map((country) => (
          <option key={country.id} value={country.currency}>
            {country.currency}
          </option>
        ))}
      </select>

      {/* Flag */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <Image
          src={selectedCountry.flag}
          alt={selectedCountry.currency}
          width={20}
          height={14}
        />
      </div>

      {/* Custom dropdown icon (SVG) */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 8L10 12L14 8"
            stroke="#6B7280"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
</div>


        <div>
          <label className="block text-gray-700 font-medium mb-1">Payment Method</label>
          <select
            className="w-full border border-gray-300 rounded-md p-2"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option>Bank Transfer</option>
            <option>Card Payment</option>
          </select>
        </div>

        <div className="flex justify-between text-gray-700 font-medium">
          <span>Fee: {fee} GBP</span>
          <span>Total Payable: {total} GBP</span>
        </div>

       <div>
  <label className="block text-gray-700 font-medium mb-1">
    Recipient gets
  </label>

  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-white">
    
    {/* Amount display */}
    <div className="w-full p-2 text-gray-800">
      {recipientGets.toLocaleString()}
    </div>

    {/* Currency dropdown */}
    <div className="relative border-l border-gray-300">
      <select
        value={selectedRecipientCountry.currency}
        onChange={(e) =>
          setSelectedRecipientCountry(
            countries.find(
              (c) => c.currency === e.target.value
            )!
          )
        }
        className="
          appearance-none
          py-2
          pl-11
          pr-10
          cursor-pointer
          outline-none
          font-medium
          text-gray-800
          bg-transparent
        "
      >
        {countries.map((country) => (
          <option key={country.id} value={country.currency}>
            {country.currency}
          </option>
        ))}
      </select>

      {/* Flag */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <Image
          src={selectedRecipientCountry.flag}
          alt={selectedRecipientCountry.currency}
          width={20}
          height={14}
        />
      </div>

      {/* Custom dropdown arrow */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 8L10 12L14 8"
            stroke="#6B7280"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
</div>


      </div>
    </div>
  );
};

// Recipient Card


const RecipientCard = () => {
  const [open, setOpen] = useState(false);
  
  return (
    
    <div className="relative bg-white rounded-lg shadow-md p-6 w-full max-w-md">
      
      {/* Top Right Logo */}
      <div className="absolute top-0 right-0">
        <Image
          src="/signup-logo.svg"
          alt="Signup logo"
          width={100}
          height={100}
        />
      </div>

      <h2 className="text-gray-800 font-semibold mb-4">
        Select a NGN recipient
      </h2>

      <input
        type="text"
        placeholder="Search recipient"
        className="w-full border border-gray-300 rounded-md p-2 mb-4"
      />

      <div className="bg-[rgba(238,237,252,1)] rounded-md p-4 text-center">
        <p className="text-gray-700 mb-3">
          You haven’t created any Naira (NGN) recipient
        </p>

          
        <button 
        onClick={() => setOpen(true)}
        className="bg-[rgba(85,74,223,1)] text-white py-2 px-6 rounded-md hover:bg-purple-700 transition">
          Add
        </button>
      {open && <AddRecipientCard onClose={() => setOpen(false)} />}
      </div>
       

      <button
        className="mt-6 w-full bg-[rgba(243,244,246,1)] text-gray-600 py-3 rounded-lg cursor-not-allowed"
        disabled
      >
        Send Money
      </button>
    </div>
  );
};




// Topbar (new topbar for this page)
const HomeTopbar = () => {
  return (
    <div className="w-full bg-white shadow-sm p-4 flex justify-between items-center mb-6">
      {/* Left: Exchange Rates */}
        <div className="flex flex-wrap px-10 gap-6 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Image src="/vector.svg" alt="rate icon" width={10} height={10} />
            1 GBP = 1,468.29 NGN
          </span>

          <span className="flex items-center gap-1">
            <Image src="/vector.svg" alt="rate icon" width={10} height={10} />
            1 USD = 1,146.72 NGN
          </span>

          <span className="flex items-center gap-1">
            <Image src="/vector.svg" alt="rate icon" width={10} height={10} />
            1 EUR = 1,236.29 NGN
          </span>

          <span className="flex items-center gap-1">
            <Image src="/vector.svg" alt="rate icon" width={10} height={10} />
            1 CAD = 850.29 NGN
          </span>

          <span className="flex items-center gap-1">
            <Image src="/vector.svg" alt="rate icon" width={10} height={10} />
            1 AUD = 750.23 NGN
          </span>

          <div className="flex px-15 items-center ml-2 gap-1">
            <Image
              src="/arrow-swap-home.svg"
              alt="rate icon"
              width={18}
              height={18}
            />
            <a href="#" className="text-[rgba(85,74,223,1)] hover:underline">
              View All Rates
            </a>
          </div>

        </div>


    </div>
  );
};

export default function HomePage() {
  return (
    <main className="bg-gray-50 min-h-screen">
    <div className="flex flex-col bg-gray-50">
      {/* Topbar */}
      <HomeTopbar />

      {/* Main Content: Two Cards */}
      <div className="flex flex-col lg:flex-row gap-6 justify-center items-start">
        <CurrencyForm />
        <RecipientCard />
      </div>
    </div>
</main>

  );
}
