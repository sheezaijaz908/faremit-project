"use client";

import { useState } from "react";
import Image from "next/image";

const AddRecipientCard = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative text-left">
        <div>
        <Image src="/nigeria.svg" alt="NGN"
        width={40}
        height={40}
        className="mb-4"
          />
          </div>
        {/* Header */}
        <h2 className="text-lg font-semibold text-gray-800">
          Add NGN Recipient
        </h2>

        <p className="mb-4 text-gray-400 ">Add a recipient with a naira account</p>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full name of account owner
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter full name"
            className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Bank */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bank
            <span className="text-red-500 ml-1">*</span>
          </label>
          <select className="w-full border border-gray-300 rounded-md p-2 bg-white outline-none focus:ring-2 focus:ring-purple-500">
            <option value="">Select bank</option>
            <option>Access Bank</option>
            <option>GTBank</option>
            <option>First Bank</option>
            <option>UBA</option>
            <option>Zenith Bank</option>
          </select>
        </div>

        {/* Account Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Account number
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter account number"
            className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Recipient email address
          </label>
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="w-1/2 border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            className="w-1/2 bg-[rgba(243,244,246,1)] text-black py-2 rounded-md hover:bg-blue-800 transition"
          >
            Add recipient
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRecipientCard;
