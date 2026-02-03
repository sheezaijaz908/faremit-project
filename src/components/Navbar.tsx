"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#FFF5EF] border-b border-orange-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Faremit Logo"
            width={160}
            height={56}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-sm text-gray-700">
          <Link href="#" className="hover:text-orange-600">Company</Link>
          <Link href="#" className="hover:text-orange-600">FAQ</Link>
          <Link href="#" className="hover:text-orange-600">Get App</Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/signin"
            className="px-5 py-2 text-sm text-gray-700 border border-gray-300 rounded-full hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="px-5 py-2 text-sm text-white bg-orange-500 rounded-full hover:bg-orange-600"
          >
            Get started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FFF5EF] border-t border-orange-100 px-6 py-6 space-y-4">

          <Link
            href="#"
            className="block text-gray-700 hover:text-orange-600"
            onClick={() => setIsOpen(false)}
          >
            Company
          </Link>

          <Link
            href="#"
            className="block text-gray-700 hover:text-orange-600"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </Link>

          <Link
            href="#"
            className="block text-gray-700 hover:text-orange-600"
            onClick={() => setIsOpen(false)}
          >
            Get App
          </Link>

          <Link
            href="/signin"
            className="block text-center px-5 py-2 text-gray-700 border border-gray-300 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="block text-center px-5 py-2 text-white bg-orange-500 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            Get started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
