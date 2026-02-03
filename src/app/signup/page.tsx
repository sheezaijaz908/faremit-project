"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/emailverification");
  };

  return (
    <main className="w-full min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row min-h-screen">

        {/* LEFT IMAGE */}
        <div className="hidden lg:flex w-full lg:w-[48%] h-screen relative">
          <Image
            src="/signin-image.svg"
            alt="Sign up illustration"
            fill
            className="object-cover rounded-l-2xl"
            priority
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full lg:w-[52%] flex items-center justify-center h-screen px-6 sm:px-12 relative">

          {/* Top Right Logo */}
          <div className="absolute top-0 right-0">
            <Image
              src="/signup-logo.svg"
              alt="Faremint Logo"
              width={170}
              height={170}
            />
          </div>

          {/* FORM CARD */}
          <div className="max-w-md w-full mx-auto bg-white p-8">
            <h1 className="text-2xl font-semibold text-[#0A1B44] mb-2">
              Create Your Faremit Account
            </h1>

            <p className="text-sm text-gray-500 mb-6">
              Already have an account?{" "}
              <Link href="/signin" className="text-[#635BFF] font-medium hover:underline">
                Sign in
              </Link>
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-[#C7C3FF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Enter your government registered full name"
                  className="w-full px-4 py-3 border border-[#C7C3FF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full px-4 py-3 border border-[#C7C3FF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
                />
              </div>

              {/* CONTINUE BUTTON */}
              <button
                type="button"
                onClick={handleContinue}
                className="w-full bg-[#635BFF] hover:bg-[#544CFF] text-white py-3 rounded-xl font-medium transition"
              >
                Continue
              </button>

              <p className="text-sm text-gray-500">
                By signing up, you agree to Faremint’s{" "}
                <Link href="/privacy-policy" className="text-[#635BFF] underline hover:text-[#544CFF]">
                  Privacy Policy
                </Link>
                ,{" "}
                <Link href="/patriot-act" className="text-[#635BFF] underline hover:text-[#544CFF]">
                  Patriot Act Disclosure
                </Link>
                , and{" "}
                <Link href="/ach-authorization" className="text-[#635BFF] underline hover:text-[#544CFF]">
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
