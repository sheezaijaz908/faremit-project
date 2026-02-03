"use client"; // required because we use useRouter

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function SignUpPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/emailverification"); // navigate to personaldetail page
  };

  return (
    <main className="min-h-screen w-full bg-white flex items-center justify-center">
      {/* WRAPPER */}
      <div className="w-full max-w-7xl flex">

        {/* LEFT IMAGE */}
        <div className="hidden lg:flex w-[48%] items-center justify-center">
          <div className="relative w-full h-[80vh]">
            <Image
              src="/signin-image.svg"
              alt="Sign in"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* GAP */}
        <div className="hidden lg:block w-[4%]" />

        {/* RIGHT FORM */}
        <div className="w-full lg:w-[48%] flex items-center justify-center">
          <div className="w-full max-w-md">
            {/* TITLE */}
            <h1 className="text-2xl font-semibold text-[#0A1B44] mb-1">
              Create Your Faremit Account
            </h1>

            <p className="text-sm text-gray-500 mb-8">
              Already have an account?{" "}
              <Link
                href="/signup"
                className="text-[#635BFF] font-medium hover:underline"
              >
                Sign in
              </Link>
            </p>

            {/* FORM */}
            <form className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-gray-600">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-[#C7C3FF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-600">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Enter your government registered full name"
                  className="w-full px-4 py-3 border border-[#C7C3FF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-600">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
                  />
                 
                </div>
              </div>

              {/* CONTINUE BUTTON */}
              <button
                type="button" // <-- important
                onClick={handleContinue}
                className="w-full bg-[#635BFF] hover:bg-[#544CFF] text-white py-3 rounded-md font-medium transition"
              >
                Continue
              </button>

              <p className="text-sm text-gray-500">
                By signing up, you agree to Faremint’s{" "}
                <Link
                  href="/privacy-policy"
                  className="text-[#635BFF] underline hover:text-[#544CFF]"
                >
                  Privacy Policy
                </Link>
                ,{" "}
                <Link
                  href="/patriot-act"
                  className="text-[#635BFF] underline hover:text-[#544CFF]"
                >
                  Patriot Act Disclosure
                </Link>
                {" "}and{" "}
                <Link
                  href="/ach-authorization"
                  className="text-[#635BFF] underline hover:text-[#544CFF]"
                >
                  ACH Payment Authorization
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
