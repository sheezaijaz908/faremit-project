"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // <-- import this
import {
  FiHome,
  FiUsers,
  FiSend,
  FiCreditCard,
  FiSettings,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // <-- current path

  // Helper to check if link is active
  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Top bar with Logo and Hamburger */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white shadow-md p-4 md:hidden">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <Image src="/logo.svg" alt="Faremint Logo" width={120} height={40} />
        </Link>
        <button
          className="p-2 rounded-md shadow bg-white"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu size={22} />
        </button>
      </div>

      {/* Overlay (Mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 z-50 w-64 bg-white shadow-md flex flex-col p-6 min-h-screen
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        {/* Close button (Mobile) */}
        <button
          className="md:hidden self-end mb-6"
          onClick={() => setIsOpen(false)}
        >
          <FiX size={22} />
        </button>

        {/* Logo (Desktop only) */}
        <div className="hidden md:flex mb-10 flex-col items-start">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image src="/logo.svg" alt="Faremint Logo" width={120} height={40} />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-6">
          <Link href="/user_dashboard/home" onClick={() => setIsOpen(false)}>
            <div
              className={`flex items-center gap-3 cursor-pointer transition
                ${isActive("/user_dashboard/home")
                  ? "text-[rgba(254,87,25,1)]"
                  : "text-gray-600 hover:text-[rgba(254,87,25,1)]"
                }`}
            >
              <FiHome size={20} /> Home
            </div>
          </Link>

          <Link href="/user_dashboard/recipients" onClick={() => setIsOpen(false)}>
            <div
              className={`flex items-center gap-3 cursor-pointer transition
                ${isActive("/user_dashboard/recipients")
                  ? "text-[rgba(254,87,25,1)]"
                  : "text-gray-600 hover:text-[rgba(254,87,25,1)]"
                }`}
            >
              <FiUsers size={20} /> Recipients
            </div>
          </Link>

          <Link href="/user_dashboard/transfers" onClick={() => setIsOpen(false)}>
            <div
              className={`flex items-center gap-3 cursor-pointer transition
                ${isActive("/user_dashboard/transfers")
                  ? "text-[rgba(254,87,25,1)]"
                  : "text-gray-600 hover:text-[rgba(254,87,25,1)]"
                }`}
            >
              <FiSend size={20} /> Transfers
            </div>
          </Link>

          <Link href="/user_dashboard/payment" onClick={() => setIsOpen(false)}>
            <div
              className={`flex items-center gap-3 cursor-pointer transition
                ${isActive("/user_dashboard/payment")
                  ? "text-[rgba(254,87,25,1)]"
                  : "text-gray-600 hover:text-[rgba(254,87,25,1)]"
                }`}
            >
              <FiCreditCard size={20} /> Payment
            </div>
          </Link>

          <Link href="/user_dashboard/settings" onClick={() => setIsOpen(false)}>
            <div
              className={`flex items-center gap-3 cursor-pointer transition
                ${isActive("/user_dashboard/settings")
                  ? "text-[rgba(254,87,25,1)]"
                  : "text-gray-600 hover:text-[rgba(254,87,25,1)]"
                }`}
            >
              <FiSettings size={20} /> Settings
            </div>
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
