"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiSearch, FiX, FiChevronDown } from "react-icons/fi";

type Recipient = {
  id: number;
  name: string;
  email: string;
  accountNumber: string;
  country: string;
  bank: string;
};

const countries = [
  { name: "United Kingdom", flag: "/united kingdom.svg" },
  { name: "Pakistan", flag: "/pakistan.svg" },
  { name: "India", flag: "/india.svg" },
  { name: "Norway", flag: "/norway.svg" },
  { name: "Nigeria", flag: "/nigeria.svg" },
  { name: "Ireland", flag: "/ireland.svg" },
];

export default function RecipientForm() {
  const [recipients, setRecipients] = useState<Recipient[]>([]);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState(countries[4]); // Nigeria default

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    accountNumber: "",
    bank: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setRecipients([
      ...recipients,
      {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        accountNumber: formData.accountNumber,
        country: selectedCountry.name,
        bank: formData.bank,
      },
    ]);

    setFormData({ name: "", email: "", accountNumber: "", bank: "" });
    setSelectedCountry(countries[4]);
    setIsOpen(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-md p-8 relative">
   <div className="absolute top-0 right-0">
                <Image
                  src="/signup-logo.svg"
                  alt="Signup logo"
                  width={100}
                  height={100}
                />
              </div>
        {/* Header */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Recipient
        </h1>

        {/* Search + Add */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search by name, email, or phone"
              className="w-full rounded-lg border border-gray-300 pl-11 pr-4 py-3 text-sm
                         focus:border-purple-600 focus:ring-1 focus:ring-purple-600
                         outline-none"
            />
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white hover:bg-purple-700"
          >
            Add Recipient
          </button>
        </div>

        {/* Recipient List */}
        <div className="space-y-4">
          {recipients.map((r) => (
            <div
              key={r.id}
              className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50"
              onClick={() => setActiveId(activeId === r.id ? null : r.id)}
            >
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">{r.name}</p>
                  <p className="text-sm text-gray-500">{r.email}</p>
                </div>
                <span className="text-purple-600 text-sm">
                  {activeId === r.id ? "Hide" : "View"}
                </span>
              </div>

              {activeId === r.id && (
                <div className="mt-3 text-sm text-gray-700">
                  <p><b>Country:</b> {r.country}</p>
                  <p><b>Bank:</b> {r.bank}</p>
                  <p><b>Account Number:</b> {r.accountNumber}</p>
                  
                </div>
              )}
            </div>
          ))}

          {recipients.length === 0 && (
            <p className="text-center text-gray-500 text-sm">
              No recipients added yet
            </p>
          )}
        </div>
      </div>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-xl p-6 relative">

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <FiX size={20} />
            </button>

            <div>
              <Image src="/recipient.svg" alt="NGN" width={40} height={40} className="mb-4" />
            </div>

            <h2 className="text-lg font-semibold text-gray-800">
              Add Recipient
            </h2>

            <p className="mb-4 mt-2 text-gray-400">This recipient will be saved to your account</p>

            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full name of account owner
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Country */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country
                <span className="text-red-500 ml-1">*</span>
              </label>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setCountryOpen(!countryOpen)}
                  className="w-full border rounded-lg px-4 py-3 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Image src={selectedCountry.flag} alt="" width={24} height={24} />
                    <span>{selectedCountry.name}</span>
                  </div>
                  <FiChevronDown className={`transition-transform ${countryOpen ? "rotate-180" : ""}`} />
                </button>

                {countryOpen && (
                  <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-md z-10">
                    {countries.map((c) => (
                      <button
                        key={c.name}
                        type="button"
                        onClick={() => {
                          setSelectedCountry(c);
                          setCountryOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        <Image src={c.flag} alt="" width={24} height={24} />
                        <span>{c.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Bank */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bank
                <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                name="bank"
                value={formData.bank}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 bg-white outline-none focus:ring-2 focus:ring-purple-500"
              >
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
                name="accountNumber"
                placeholder="Enter account number"
                value={formData.accountNumber}
                onChange={handleChange}
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
                name="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleSubmit}
                className="w-full bg-[rgba(243,244,246,1)] text-black py-2 rounded-md hover:bg-blue-800 transition"
              >
                Add recipient
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
