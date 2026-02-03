"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const countries = [
  { id: 1, name: "United Kingdom", flag: "/united kingdom.svg", code: "+44", currency: "GBP" },
  { id: 2, name: "United States", flag: "/united states.svg", code: "+1", currency: "USD" },
  { id: 3, name: "Canada", flag: "/canada.svg", code: "+1", currency: "CAD" },
  { id: 4, name: "Australia", flag: "/australia.svg", code: "+61", currency: "AUD" },
  { id: 5, name: "Uganda", flag: "/uganda.svg", code: "+256", currency: "UGX" },
  { id: 6, name: "France", flag: "/france.svg", code: "+33", currency: "EUR" },
  { id: 7, name: "Somalia", flag: "/somalia.svg", code: "+252", currency: "SOS" },
  { id: 8, name: "Pakistan", flag: "/pakistan.svg", code: "+92", currency: "PKR" },
  { id: 9, name: "Norway", flag: "/norway.svg", code: "+47", currency: "NOK" },
  { id: 10, name: "Ireland", flag: "/ireland.svg", code: "+353", currency: "EUR" },
  { id: 11, name: "Nigeria", flag: "/nigeria.svg", code: "+234", currency: "NGN" },
  { id: 12, name: "Kenya", flag: "/kenya.svg", code: "+254", currency: "KES" },
  { id: 13, name: "India", flag: "/india.svg", code: "+91", currency: "INR" },
];

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#FFF7F2]">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-20 text-center relative z-10">
        <h1 className="text-[42px] md:text-[52px] font-bold text-[#0A1B44] leading-tight relative">
          Low Fees and the <br />
          <span>Best Rates For</span>{" "}
          <span className="relative inline-block">
            You
            <img
              src="/underline.svg"
              alt="underline"
              className="absolute left-0 -bottom-1 w-full h-3 object-contain"
            />
          </span>
        </h1>

        <p className="mt-5 text-gray-600 max-w-xl mx-auto">
          Send money with ease across the world with our fast and secure platform.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button className="flex items-center justify-center">
            <img
              src="/download-app-button.svg"
              alt="Download App"
              className="h-12 w-auto"
            />
          </button>

          <Link href="/signup">
          <button className="h-12 w-48 bg-[rgba(254,87,25,1)] text-white rounded-full font-medium hover:bg-orange-600 transition-colors">
            Get Started Now →
          </button>
        </Link>
        </div>
      </section>

      {/* MAIN CARD */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 mt-16">
        <div className="bg-[#FFE8D9] rounded-[32px] shadow-xl flex flex-col md:flex-row relative z-20 h-[500px] overflow-hidden">

          {/* LEFT IMAGE */}
          <div className="md:w-1/2 h-full relative">
            <Image
              src="/countries-flags.svg"
              alt="Countries Flags"
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT CARD */}
          <div className="md:w-2/5 bg-[#F9FAFB] rounded-2xl p-6 space-y-4 my-6 flex-shrink-0">

            {/* YOU SEND */}
            <div>
              <label className="text-sm text-gray-500">You send</label>

              <div className="flex items-center border rounded-lg px-4 py-3 bg-white gap-3">
                <input
                  type="number"
                  defaultValue={200}
                  className="w-full outline-none"
                />

                <div className="flex items-center gap-2">
                  <Image
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    width={20}
                    height={14}
                    className="rounded-sm"
                  />

                  <select
                    value={selectedCountry.currency}
                    onChange={(e) =>
                      setSelectedCountry(
                        countries.find(c => c.currency === e.target.value)!
                      )
                    }
                    className="bg-transparent font-semibold outline-none cursor-pointer"
                  >
                    {countries.map((country) => (
                      <option key={country.id} value={country.currency}>
                        {country.currency}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* PAYMENT */}
            <div>
              <label className="text-sm text-gray-500">Payment Method</label>
              <select className="w-full border rounded-lg px-4 py-3 bg-white">
                <option>Bank Transfer</option>
              </select>
            </div>

            {/* INFO */}
            <div className="text-sm text-gray-600 space-y-1">
              <p>Exchange Rate <span className="float-right">1.3448</span></p>
              <p>Fee <span className="float-right">2.99 GBP</span></p>
              <p className="font-semibold">
                Total Payable <span className="float-right">202.99 GBP</span>
              </p>
            </div>

            {/* RECIPIENT */}
            <div>
              <label className="text-sm text-gray-500">Recipient gets</label>
              <div className="flex items-center border rounded-lg px-4 py-3 bg-white">
                <input
                  type="text"
                  defaultValue="200,000.00"
                  className="w-full outline-none"
                />
                <span className="ml-2 font-semibold">NGN</span>
              </div>
            </div>

            <button className="w-full bg-[rgba(85,67,60,1)] text-white py-3 rounded-xl hover:opacity-90 transition-opacity">
              Send Money Now
            </button>
          </div>
        </div>

        {/* ORANGE BG */}
        <div className="absolute inset-x-[-116] top-[250px] bottom-0 bg-[rgba(254,87,25,1)] z-0"></div>
      </section>

      {/* PARTNERS */}
      <section className="bg-[rgba(254,87,25,1)] py-10 relative z-10">
        <div className="text-center mb-8 mt-12">
          <span className="inline-block px-5 py-1 rounded-full text-sm bg-[rgba(254,87,25,1)] text-white font-medium border border-white">
            Our Partners
          </span>
        </div>

        <div className="max-w-6xl mx-auto mb-10 flex flex-wrap justify-center gap-32">
          <Image src="/premier-bank.svg" alt="premier bank" width={105} height={60} />
          <Image src="/mtn.svg" alt="mtn" width={105} height={60} />
          <Image src="/m-pesa.svg" alt="m-pesa" width={105} height={60} />
          <Image src="/swish.svg" alt="swish" width={105} height={60} />
          <Image src="/evc-plus.svg" alt="evc-plus" width={105} height={60} />
        </div>
      </section>

    </main>
  );
}
