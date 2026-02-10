"use client";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";

const currencies = ["NGN", "USD", "EUR", "GBP"];

type Transfer = {
  transferId: number;
  recipient: string;
  amountSent: number;
  amountConverted: string;
  timeSent: string;
  status: string;
};

export default function TransferPage() {
  const [search, setSearch] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [transferDate, setTransferDate] = useState("");
  const [transfers, setTransfers] = useState<Transfer[]>([
    {
      transferId: 1,
      recipient: "John Doe",
      amountSent: 5000,
      amountConverted: "12.5 USD",
      timeSent: "2026-02-09",
      status: "Completed",
    },
    {
      transferId: 2,
      recipient: "Jane Smith",
      amountSent: 200,
      amountConverted: "50 USD",
      timeSent: "2026-02-08",
      status: "Pending",
    },
  ]);

  // Filtered transfers based on search, currency, and date
  const filteredTransfers = transfers.filter((t) => {
    const matchSearch = t.recipient.toLowerCase().includes(search.toLowerCase());
    const matchCurrency = selectedCurrency ? t.amountConverted.includes(selectedCurrency) : true;
    const matchDate = transferDate ? t.timeSent === transferDate : true;
    return matchSearch && matchCurrency && matchDate;
  });

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6 relative">
         <div className="absolute top-0 right-0">
                        <Image
                          src="/signup-logo.svg"
                          alt="Signup logo"
                          width={100}
                          height={100}
                        />
                      </div>
        <h1 className="mb-4 text-2xl font-bold">Transfer</h1>

        {/* Filters: Search + Currency + Date */}
        <div className="flex flex-col lg:flex-row items-center gap-4 mb-6">
          {/* Search */}
          <div className="relative mt-6 flex-1 w-full">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by recipient"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-lg pl-11 pr-4 py-3 text-sm
                         focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-none"
            />
          </div>

          {/* Currency Dropdown */}
          <div className="relative w-full lg:w-48">
            <label className="text-sm">Currency</label>
            <select
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm bg-white outline-none focus:ring-2 focus:ring-purple-500"
            >
              {currencies.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Transfer Date */}
          <div className="w-full lg:w-48">
            <label className="text-sm">Transfer Date</label>
            <input
              type="date"
              value={transferDate}
              onChange={(e) => setTransferDate(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Transfer Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-3 border-b text-sm font-medium text-gray-700">Transfer ID</th>
                <th className="px-4 py-3 border-b text-sm font-medium text-gray-700">Recipient</th>
                <th className="px-4 py-3 border-b text-sm font-medium text-gray-700">Amount Sent</th>
                <th className="px-4 py-3 border-b text-sm font-medium text-gray-700">Amount Converted</th>
                <th className="px-4 py-3 border-b text-sm font-medium text-gray-700">Time Sent</th>
                <th className="px-4 py-3 border-b text-sm font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransfers.length > 0 ? (
                filteredTransfers.map((t) => (
                  <tr key={t.transferId} className="hover:bg-gray-50 cursor-pointer">
                    <td className="px-4 py-3 border-b text-sm">{t.transferId}</td>
                    <td className="px-4 py-3 border-b text-sm">{t.recipient}</td>
                    <td className="px-4 py-3 border-b text-sm">{t.amountSent}</td>
                    <td className="px-4 py-3 border-b text-sm">{t.amountConverted}</td>
                    <td className="px-4 py-3 border-b text-sm">{t.timeSent}</td>
                    <td className="px-4 py-3 border-b text-sm">{t.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-4 py-3 text-center text-gray-500 text-sm">
                    No transfers found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
