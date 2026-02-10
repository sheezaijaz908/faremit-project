"use client";
import React from "react";
import Accordion from "../Accordion";
import Image from "next/image";
import { FiMail, FiLock, FiBell, FiMonitor, FiXCircle } from "react-icons/fi";

export default function SettingsPage() {
  return (
    <main className="max-h-screen bg-gray-50 flex justify-center p-8">
      {/* White card wrapper */}
      <div className="w-full max-w-6xl bg-white p-10 rounded-xl shadow-md relative">
        <div className="absolute top-0 right-0">
                  <Image
                    src="/signup-logo.svg"
                    alt="Signup logo"
                    width={110}
                    height={110}
                  />
                </div>
        <h1 className="text-2xl font-semibold mb-6">Settings</h1>

        {/* Change Email Address */}
        <Accordion
          title="Change Email Address"
          subtitle="We'll send a link to the new address for verification"
          icon={<FiMail />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600 mb-1">New Email Address</p>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div>

            <div>
              <p className="text-gray-600 mb-1">Password</p>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button className="mt-4 bg-[rgba(85,74,223,1)] text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
              Send Link
            </button>
          </div>
        </Accordion>

        {/* Change Password */}
        <Accordion 
         title="Change Password" 
         subtitle="Reset your password."
         icon={<FiLock />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600 mb-1">Current Password</p>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div>

            <div>
              <p className="text-gray-600 mb-1">New Password</p>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button className="mt-4 bg-[rgba(85,74,223,1)] text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
              Change Password
            </button>
          </div>
        </Accordion>

        {/* Notifications */}
        <Accordion
  title="Notifications"
  subtitle="Set your notification preferences."
  icon={<FiBell />}
>
  <div className="space-y-10">
    {/* Email Notifications */}
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-medium text-gray-900">
          Email notifications
        </h2>

        {/* Toggle */}
        <button className="relative inline-flex h-5 w-9 items-center rounded-full bg-indigo-600 transition">
          <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-4 transition" />
        </button>
      </div>

      <div className="space-y-3">
        <label className="flex items-center gap-3 text-sm text-gray-700">
          <input
            type="checkbox"
            defaultChecked
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          Transfers
        </label>

        <label className="flex items-center gap-3 text-sm text-gray-700">
          <input
            type="checkbox"
            defaultChecked
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          Rates updates
        </label>

        <label className="flex items-center gap-3 text-sm text-gray-700">
          <input
            type="checkbox"
            defaultChecked
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          Campaigns, reviews and surveys
        </label>
      </div>
    </div>

    {/* Dashboard Notifications */}
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-medium text-gray-900">
          Dashboard notifications
        </h2>

        {/* Toggle */}
        <button className="relative inline-flex h-5 w-9 items-center rounded-full bg-indigo-600 transition">
          <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-4 transition" />
        </button>
      </div>

      <div className="space-y-3">
        <label className="flex items-center gap-3 text-sm text-gray-700">
          <input
            type="checkbox"
            defaultChecked
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          Transfers
        </label>

        <label className="flex items-center gap-3 text-sm text-gray-700">
          <input
            type="checkbox"
            defaultChecked
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          Rates updates
        </label>

        <label className="flex items-center gap-3 text-sm text-gray-700">
          <input
            type="checkbox"
            defaultChecked
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          Campaigns, reviews and surveys
        </label>
      </div>
    </div>

    {/* Save button */}
    <div className="flex justify-end">
      <button
        disabled
        className="px-8 py-3 rounded-lg bg-gray-100 text-gray-400 text-sm font-medium cursor-not-allowed"
      >
        Save changes
      </button>
    </div>
  </div>
</Accordion>


        {/* Device History */}
       <Accordion
  title="Device History"
  subtitle="Control your login activity across all devices and browsers."
  icon={<FiMonitor />}
>
  <div className="space-y-6">
    {/* Device Item – Current */}
    <div className="flex items-start justify-between">
      <div className="flex gap-4">
        {/* Device Icon */}
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
          {/* Desktop Icon */}
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 17h6m-7 3h8m-10-6h12a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v6a2 2 0 002 2z"
            />
          </svg>
        </div>

        {/* Device Info */}
        <div>
          <p className="text-sm font-medium text-gray-900">
            Windows (Chrome)
            <span className="ml-2 text-gray-700 font-normal">
              160.252.121.192
            </span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            20, Jan 2024 at 16:24
          </p>
        </div>
      </div>

      <span className="text-sm text-indigo-600 font-medium">
        Current activity
      </span>
    </div>

    {/* Device Item – Other */}
    <div className="flex items-start justify-between">
      <div className="flex gap-4">
        {/* Mobile Icon */}
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 4h10a1 1 0 011 1v14a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1z"
            />
          </svg>
        </div>

        {/* Device Info */}
        <div>
          <p className="text-sm font-medium text-gray-900">
            SM-A022F
            <span className="ml-2 text-gray-700 font-normal">
              160.182.191.195
            </span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            20, Dec 2023 at 09:15
          </p>
        </div>
      </div>

      <button className="text-sm text-indigo-600 hover:underline font-medium">
        Log out device
      </button>
    </div>

    {/* Footer Action */}
    <div className="flex justify-end pt-4">
      <button className="bg-[rgba(85,74,223,1)] text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition text-sm font-medium">
        Log out all devices
      </button>
    </div>
  </div>
</Accordion>


        {/* Deactivate Account */}
        <Accordion 
        title="Deactivate Account"
        subtitle="Close your account."
         icon={<FiXCircle />}>
           <div className="flex justify-end">
            <button className="mt-4 bg-[rgba(220,38,37,1)] text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
              Deactivate Account
            </button>
          </div>
        </Accordion>
      </div>
    </main>
  );
}
