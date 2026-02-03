import React from "react";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    // 🌈 Full-width background
    <section className="bg-[#FFF7F2] py-16">
      
      {/* 🧾 Card */}
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto">
        
        {/* Left Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500">
            Bridging Dreams,
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Building Trust
          </h2>
          <p className="text-gray-600 mt-4 max-w-md">
            Enjoy unlimited possibilities with the best exchange rates for sending money,
            managing business payments, and handling global finances.
          </p>

              <ul className="mt-6 space-y-4 text-gray-700">
              <li className="flex items-center gap-2">
                <img src="/hero-logo.svg" alt="icon" className="w-4 h-4" />
                Low cost
              </li>
              <li className="flex items-center gap-2">
                <img src="/hero-logo.svg" alt="icon" className="w-4 h-4" />
                Competitive Pricing
              </li>
              <li className="flex items-center gap-2">
                <img src="/hero-logo.svg" alt="icon" className="w-4 h-4" />
                Transparent Fees
              </li>
              <li className="flex items-center gap-2">
                <img src="/hero-logo.svg" alt="icon" className="w-4 h-4" />
                Clear Exchange Rates
              </li>
            </ul>

          <Link href="/signup">
          <button className="mt-10 text-black font-semibold rounded hover:bg-orange-500 transition">
            Get Started Now →
          </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src="/hero-image.svg"
            alt="User holding phone"
            className="w-[500px] h-[500px] mb-10"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
