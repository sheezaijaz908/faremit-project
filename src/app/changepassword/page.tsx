import Image from "next/image";

export default function ChangePasswordPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">

      {/* Top Right Decorative Logo */}
      <div className="absolute top-0 right-0">
        <Image
          src="/signup-logo.svg"
          alt="Decorative circles"
          width={260}
          height={260}
        />
      </div>

      {/* Bottom Left Decorative Logo */}
      <div className="absolute bottom-0 left-0">
        <Image
          src="/changepassword-logo.svg"
          alt="Decorative shape"
          width={220}
          height={120}
        />
      </div>

      {/* Main Card */}
      <div className="w-full max-w-md px-6 text-center relative z-10">

        {/* Logo */}
        <div className="flex mb-10">
          <Image
            src="/logo.svg"
            alt="Faremint Logo"
            width={160}
            height={40}
          />
        </div>

        {/* Heading */}
        <h1 className="text-2xl text-[#0A1B44] text-left mb-8">
            Change your password
        </h1>

        {/* New Password */}
        <div className="mb-5 text-left">
          <label className="block text-sm text-gray-600 mb-2">
            New Password
          </label>
          <div className="relative">
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
            />
            
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mb-8 text-left">
          <label className="block text-sm text-gray-600 mb-2">
            Confirm New Password
          </label>
          <div className="relative">
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
            />
            
          </div>
        </div>

        {/* Save Button */}
        <button className="w-full bg-[#5B54E3] hover:bg-[#4E47D6] text-white py-3 rounded-md font-medium transition mb-4">
          Save
        </button>

        {/* Info Text */}
        <p className="text-sm text-gray-600">
          You&apos;ll be redirected to the Sign in page after saving your new password.
        </p>
      </div>
    </main>
  );
}
