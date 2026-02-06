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
            <Image
              src="/underline.svg"
              alt="underline"
              fill
              className="object-contain object-left-bottom"
            />
          </span>
        </h1>
        <p className="mt-5 text-gray-600 max-w-xl mx-auto">
          Send money with ease across the world with our fast and secure platform.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button className="flex items-center justify-center">
            <Image
              src="/download-app-button.svg"
              alt="Download App"
              width={180}
              height={48}
              className="h-12 w-auto"
            />
          </button>
          <Link href="/signup">
            <button className="h-12 px-8 bg-[rgba(254,87,25,1)] text-white rounded-full font-medium hover:bg-orange-600 transition-colors">
              Get Started Now →
            </button>
          </Link>
        </div>
      </section>

      {/* MAIN CARD SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 mt-16 md:mt-24">
        <div className="bg-[#FFE8D9] rounded-[32px] shadow-xl flex flex-col md:flex-row relative z-20 h-auto md:h-[500px] overflow-hidden">
          {/* LEFT IMAGE */}
          <div className="md:w-1/2 h-64 md:h-full relative">
            <Image
              src="/countries-flags.svg"
              alt="Countries Flags"
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT CARD */}
          <div className="md:w-2/5 bg-[#F9FAFB] rounded-2xl p-6 md:p-8 space-y-5 my-6 md:my-0 flex-shrink-0">
            {/* YOU SEND */}
            <div>
              <label className="text-sm text-gray-500 block mb-1">You send</label>
              <div className="flex items-center border rounded-lg px-4 py-3 bg-white gap-3">
                <input
                  type="number"
                  defaultValue={200}
                  className="w-full outline-none text-lg font-medium"
                />
                <div className="flex items-center gap-2 min-w-[110px]">
                  <Image
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    width={24}
                    height={18}
                    className="rounded-sm"
                  />
                  <select
                    value={selectedCountry.currency}
                    onChange={(e) =>
                      setSelectedCountry(
                        countries.find((c) => c.currency === e.target.value)!
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

            {/* PAYMENT METHOD */}
            <div>
              <label className="text-sm text-gray-500 block mb-1">Payment Method</label>
              <select className="w-full border rounded-lg px-4 py-3 bg-white outline-none">
                <option>Bank Transfer</option>
              </select>
            </div>

            {/* INFO */}
            <div className="text-sm text-gray-600 space-y-1.5">
              <p>
                Exchange Rate <span className="float-right">1.3448</span>
              </p>
              <p>
                Fee <span className="float-right">2.99 GBP</span>
              </p>
              <p className="font-semibold">
                Total Payable <span className="float-right">202.99 GBP</span>
              </p>
            </div>

            {/* RECIPIENT GETS */}
            <div>
              <label className="text-sm text-gray-500 block mb-1">Recipient gets</label>
              <div className="flex items-center border rounded-lg px-4 py-3 bg-white">
                <input
                  type="text"
                  defaultValue="200,000.00"
                  className="w-full outline-none text-lg font-medium"
                />
                <span className="ml-2 font-semibold min-w-[50px] text-right">NGN</span>
              </div>
            </div>

            <button className="w-full bg-[#55433C] text-white py-3.5 rounded-xl font-medium hover:opacity-90 transition-opacity mt-2">
              Send Money Now
            </button>
          </div>
        </div>

        {/* Orange background – full bleed without causing scrollbar */}
        <div className="absolute inset-x-0 left-[-100vw] right-[-100vw] top-[200px] md:top-[250px] bottom-0 bg-[rgba(254,87,25,1)] -z-10" />
      </section>

      {/* PARTNERS */}
      <section className="bg-[rgba(254,87,25,1)] py-12 md:py-16 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block px-6 py-1.5 rounded-full text-sm bg-[rgba(254,87,25,1)] text-white font-medium border-2 border-white">
            Our Partners
          </span>
        </div>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-16 md:gap-24 px-6">
          <Image src="/premier-bank.svg" alt="Premier Bank" width={105} height={60} />
          <Image src="/mtn.svg" alt="MTN" width={105} height={60} />
          <Image src="/m-pesa.svg" alt="M-Pesa" width={105} height={60} />
          <Image src="/swish.svg" alt="Swish" width={105} height={60} />
          <Image src="/evc-plus.svg" alt="EVC Plus" width={105} height={60} />
        </div>
      </section>
    </main>
  );
}