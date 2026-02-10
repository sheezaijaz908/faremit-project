"use client";
import React, { useState, ReactNode } from "react";

interface AccordionProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  children: ReactNode;
}

export default function Accordion({
  title,
  subtitle,
  icon,
  children,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg mb-4">
      <button
        type="button"
        className="w-full flex items-center justify-between px-4 py-3 bg-white rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* LEFT SIDE */}
        <div className="flex items-start gap-3 text-left">
          {icon && <div className="mt-1 text-2xl bg-gray-300 rounded-3xl p-2">{icon}</div>}

          <div>
            <span className="font-medium text-gray-900 block">
              {title}
            </span>

            {subtitle && (
              <p className="text-sm text-gray-500 mt-1">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* ARROW */}
        <svg
          className={`w-4 h-4 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* CONTENT */}
      {isOpen && (
        <div className="p-4 bg-white">
          {children}
        </div>
      )}
    </div>
  );
}
