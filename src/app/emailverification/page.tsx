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

          {/* Code Sent Alert */}
          <div className="max-w-md mx-auto w-full">
            <div className="flex items-start gap-3 border border-purple-200 bg-purple-50 rounded-lg p-4 mb-6">
              <div className="w-5 h-5 mt-0.5 rounded-full border border-green-500 flex items-center justify-center text-green-600 text-xs">
                ✓
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Code Sent
                </p>
                <p className="text-sm text-gray-600">
                  We’ve sent a 6-digit authentication code to the email address
                  you provided. Use it to verify your email address and
                  continue.
                </p>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              Verify your email address
            </h1>

            <p className="text-sm text-gray-600 mb-6">
              6-digit code sent to
              <span className="font-medium text-gray-900">
                {" "}ckemeakwa@gmail.com
              </span>{" "}
              <Link href="#" className="text-purple-600 hover:underline">
                Change email
              </Link>
            </p>

            {/* Code Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Code
              </label>
              <input
                type="text"
                placeholder="Enter 6-digit access code"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Verify Button */}
            <Link href="/personaldetail">
  <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition">
    Verify
  </button>
</Link>

            {/* Resend */}
            <p className="text-sm text-center mt-6">
              <span className="text-red-500 font-medium">47s</span>{" "}
              <button className="text-gray-500 hover:underline">
                Resend code
              </button>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
