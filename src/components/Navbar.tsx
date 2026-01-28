"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#FFF5EF] border-b border-orange-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Faremit Logo"
            width={160}
            height={56}
          />
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-10 text-sm text-gray-700">
          <Link href="#" className="hover:text-orange-600">
            Company
          </Link>
          <Link href="#" className="hover:text-orange-600">
            FAQ
          </Link>
          <Link href="#" className="hover:text-orange-600">
            Get App
          </Link>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="px-5 py-2 text-sm font-large text-gray-700 border border-gray-300 rounded-full hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="px-5 py-2 text-sm font-large text-white bg-orange-500 rounded-full hover:bg-orange-600"
          >
            Get started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
