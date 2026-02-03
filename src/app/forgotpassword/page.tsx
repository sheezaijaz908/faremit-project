import Image from "next/image";
import Link from "next/link";

export default function VerifyEmailPage() {
  return (
    <main className="w-full bg-white flex items-center justify-center">
      <div className="w-full max-w-6xl flex min-h-[110vh]">

        {/* LEFT IMAGE SECTION */}
        <div className="hidden lg:flex w-[48%] relative">
          <Image
            src="/signin-image.svg"
            alt="Sign in illustration"
            fill
            className="object-cover rounded-l-2xl"
            priority
          />
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="w-full lg:w-[52%] flex flex-col justify-center px-6 sm:px-12 relative">

          {/* Top Right Logo */}
          <div className="absolute top-6 right-6">
            <Image
              src="/signup-logo.svg"
              alt="Faremint Logo"
              width={180}
              height={180}
            />
          </div>

          <div className="max-w-md mx-auto w-full relative">

            {/* ✅ Back Button */}
            <Link
              href="/signin"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-6"
            >
              <span className="text-lg">←</span>
              Back
            </Link>

            {/* Heading */}
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              Reset your password
            </h1>

            <p className="text-sm text-gray-600 mb-6">
              Enter the email address registered to your account
            </p>

            {/* Email Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <input
                type="text"
                placeholder="ckemeakwa@gmail.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Reset Button */}
            <Link href="/changepassword">
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition">
                Reset Password
              </button>
            </Link>


          </div>
        </div>
      </div>
    </main>
  );
}
