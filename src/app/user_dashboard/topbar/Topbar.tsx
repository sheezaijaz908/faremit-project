// components/Topbar.tsx
import React from "react";
import { FiBell } from "react-icons/fi";

const Topbar = () => {
  return (
    <header className="flex items-center justify-between bg-white shadow-sm px-35 py-4">
      
      {/* Exchange Rates */}
      <div className="flex gap-6 text-sm text-gray-600">
 
      </div>

      {/* Notifications & Profile */}
      <div className="flex items-center gap-4">
        <FiBell size={20} className="text-gray-600 w-6 h-6 rounded-full bg-[rgba(236,234,238,1)]" />
        <div className="w-8 h-8 rounded-full bg-[rgba(236,234,238,1)] text-black flex items-center justify-center font-bold">
          AB
        </div>
      </div>

    </header>
  );
};

export default Topbar;
