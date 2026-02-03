"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("akwa@gmail.com");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let isValid = true;

    // Reset errors
    setEmailError("");
    setPasswordError("");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Enter the correct email address");
      isValid = false;
    }

    // Password validation
    if (password.length < 6) {
      setPasswordError(
        "Password is incorrect. Password must be greater than 6 characters"
      );
      isValid = false;
    }

    if (!isValid) return;

    // ✅ Auth success (for now)
    console.log("Signed in successfully");
  };

  return (
    <main className="min-h-screen w-full bg-white flex items-center justify-center">
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

        <div className="hidden lg:block w-[4%]" />

        {/* RIGHT FORM */}
        <div className="w-full lg:w-[48%] flex items-center justify-center">
          <div className="w-full max-w-md relative">

            {/* Logo */}
            <div className="absolute top-0 right-0">
              <Image
                src="/signup-logo.svg"
                alt="Faremint Logo"
                width={180}
                height={180}
              />
            </div>

            <h1 className="text-2xl font-semibold text-[#0A1B44] mb-1">
              Welcome back
            </h1>

            <p className="text-sm text-gray-500 mb-8">
              New to Faremint?{" "}
              <Link
                href="/signup"
                className="text-[#635BFF] font-medium hover:underline"
              >
                Sign up
              </Link>
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Email */}
              <div>
                <label className="block text-sm mb-2 text-gray-600">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2
                    ${
                      emailError
                        ? "border-red-500 focus:ring-red-300"
                        : "border-[#C7C3FF] focus:ring-[#635BFF]"
                    }`}
                />
                {emailError && (
                  <p className="text-xs text-red-500 mt-1">{emailError}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm mb-2 text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2
                    ${
                      passwordError
                        ? "border-red-500 focus:ring-red-300"
                        : "border-gray-300 focus:ring-[#635BFF]"
                    }`}
                />
                {passwordError && (
                  <p className="text-xs text-red-500 mt-1">{passwordError}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#635BFF] hover:bg-[#544CFF] text-white py-3 rounded-md font-medium transition"
              >
                Sign In
              </button>
            </form>

            <div className="mt-4">
              <Link
                href="/forgotpassword"
                className="text-sm text-[#635BFF] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
