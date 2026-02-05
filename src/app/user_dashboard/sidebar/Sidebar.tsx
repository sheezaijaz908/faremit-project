// components/Sidebar.tsx
"use client";
import React from "react";
import Image from "next/image";
import { FiHome, FiUsers, FiSend, FiCreditCard, FiSettings } from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md flex flex-col p-6 min-h-screen">
        {/* Logo */}
        <div className="mb-10 flex flex-col items-start">
        <Image src="/logo.svg" alt="Faremint Logo" width={120} height={40} />
        </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-6">
        <button className="flex items-center gap-3 text-[rgba(254,87,25,1)] font-medium">
          <FiHome size={20} /> Home
        </button>
        <button className="flex items-center gap-3 text-gray-600 hover:text-[rgba(254,87,25,1)] transition">
          <FiUsers size={20} /> Recipients
        </button>
        <button className="flex items-center gap-3 text-gray-600 hover:text-[rgba(254,87,25,1)] transition">
          <FiSend size={20} /> Transfers
        </button>
        <button className="flex items-center gap-3 text-gray-600 hover:text-[rgba(254,87,25,1)] transition">
          <FiCreditCard size={20} /> Payment
        </button>
        <button className="flex items-center gap-3 text-gray-600 hover:text-[rgba(254,87,25,1)] transition">
          <FiSettings size={20} /> Settings
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
