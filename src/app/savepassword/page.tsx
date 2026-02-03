import Image from "next/image";
import Link from "next/link";

export default function SavePasswordPage() {
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
            <div className="flex items-start gap-3 border border-purple-200 bg-purple-50 rounded-lg p-4 mb-6">
              <div className="w-5 h-5 mt-0.5 rounded-full border border-green-500 flex items-center justify-center text-green-600 text-xs">
                ✓
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 text-left">
                  Password Changed
                </p>
                <p className="text-sm text-gray-600 text-left">
                Your password has successfully been changed. You will be redirected to the sign in page.<br />
                <Link href="/signin" className="text-orange-500 underline">
                    Click here
                </Link>{" "}
                if nothing happens.
                </p>
              </div>
            </div>
       
      </div>
    </main>
  );
}
