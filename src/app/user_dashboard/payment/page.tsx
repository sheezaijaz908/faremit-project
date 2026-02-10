"use client";
import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import Image from "next/image";

type BankAccount = {
  id: number;
  accountName: string;
  bank: string;
  accountNumber: string;
};

export default function PaymentMethods() {
  const [accounts, setAccounts] = useState<BankAccount[]>([
    {
      id: 1,
      accountName: "Akwa Abasiekeme Greco",
      bank: "Access Bank",
      accountNumber: "0123456789",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedAccountId, setSelectedAccountId] = useState<number | null>(
    null
  );

  const handleDeleteClick = (id: number) => {
    setSelectedAccountId(id);
    setShowModal(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedAccountId !== null) {
      setAccounts(accounts.filter((acc) => acc.id !== selectedAccountId));
      setShowModal(false);
      setSelectedAccountId(null);
    }
  };

  const handleCancel = () => {
    setShowModal(false);
    setSelectedAccountId(null);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-20">
      {/* White container wrapper */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6 relative">
        <div className="absolute top-0 right-0">
          <Image
            src="/signup-logo.svg"
            alt="Signup logo"
            width={100}
            height={100}
          />
        </div>

        <h1 className="text-xl font-semibold mb-6">Payment Methods</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Existing Accounts */}
          {accounts.map((acc) => (
            <div
              key={acc.id}
              className="bg-[rgba(0,17,64,1)] text-white rounded-xl p-6 relative shadow-md"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                  <Image
                    src="/nigeria.svg"
                    alt="NGN"
                    width={30}
                    height={30}
                  />
                </div>
              </div>

              <p className="font-medium mb-2">Account Name: {acc.accountName}</p>
              <p className="text-sm mb-2">Bank: {acc.bank}</p>
              <p className="text-sm mb-2">Account Number: {acc.accountNumber}</p>

              <button
                onClick={() => handleDeleteClick(acc.id)}
                className="absolute bottom-4 right-4 bg-red-500 p-1 rounded-full hover:bg-red-600"
              >
                <FiTrash2 size={16} />
              </button>
            </div>
          ))}

          {/* Add New Account Card */}
          <div className="bg-purple-50 rounded-xl p-6 flex flex-col items-center justify-center text-center border-2 border-purple-200 hover:bg-purple-100 cursor-pointer transition">
            <p className="mb-4">Add another bank account</p>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
              Add
            </button>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
              {/* Top Left Delete Icon */}
              <div className="absolute top-4 left-4 text-red-500">
                <FiTrash2 size={24} />
              </div>

              <h1 className="text-2xl font-bold mt-8 mb-2">
                Delete payment method
              </h1>
              <p className="text-sm text-gray-600 mb-6">
                The payment method will be deleted
              </p>

              <div className="flex justify-center gap-4">
                <button
                  onClick={handleCancel}
                  className="px-18 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteConfirm}
                  className="px-18 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
