// components/Topbar.tsx
"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FiBell, FiUser, FiHelpCircle, FiMail, FiLogOut, FiChevronDown } from "react-icons/fi";


const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between bg-white shadow-sm px-35 py-4">
      {/* Exchange Rates or Left Section */}
      <div className="flex gap-6 text-sm text-gray-600">
        {/* You can add left-side content here */}
      </div>

      {/* Notifications & Profile */}
      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <FiBell size={20} className="text-gray-600 w-6 h-6 rounded-full bg-[rgba(236,234,238,1)] p-1 cursor-pointer" />

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          {/* Circle with initials */}
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Initials */}
            <div className="w-8 h-8 rounded-full bg-[rgba(236,234,238,1)] text-black flex items-center justify-center font-bold">
              AB
            </div>

            {/* Dropdown Icon */}
            <FiChevronDown
              size={16}
              className={`text-gray-600 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <ul className="flex flex-col py-2">
                <li>
                  <button className="w-full flex items-center gap-2 text-left px-4 py-2 hover:bg-gray-100">
                    <FiUser /> Profile
                  </button>
                </li>
                <li>
                  <button className="w-full flex items-center gap-2 text-left px-4 py-2 hover:bg-gray-100">
                    <FiHelpCircle /> FAQs
                  </button>
                </li>
                <li>
                  <button className="w-full flex items-center gap-2 text-left px-4 py-2 hover:bg-gray-100">
                    <FiMail /> Contact Us
                  </button>
                </li>
                <li>
                  <Link href="/">
                  <button className="w-full flex items-center gap-2 text-left px-4 py-2 text-red-600 hover:bg-red-100">
                    <FiLogOut /> Log out
                  </button>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
