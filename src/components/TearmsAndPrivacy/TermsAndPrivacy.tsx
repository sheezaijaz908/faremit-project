// app/term-and-privacy/page.tsx    or   components/TermAndPrivacy.tsx
// File name as requested: TermAndPrivacy.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Privacy | Faremint",
  description: "Faremint Terms of Service and Privacy Policy",
};

export default function TermAndPrivacy() {
  return (
    <div className="min-h-screen bg-[#FFF7F2] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 md:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-600 tracking-tight">
            Terms & Privacy
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 font-medium">
            Last Updated: 1st of September, 2023
          </p>
        </div>

        {/* Main two-column content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* LEFT COLUMN – Navigation-like list */}
          <div className="space-y-6 lg:space-y-8">
            <SectionLink title="Data Collection and Use" active />
            <SectionLink title="Purposes of Data Collection" />
            <SectionLink title="Sharing of Personal Information" />
            <SectionLink title="Your Rights" />
            <SectionLink title="Data Retention" />
            <SectionLink title="Security Measures" />
            <SectionLink title="Questions" />
          </div>

          {/* RIGHT COLUMN – Main content */}
          <div className="space-y-14 lg:space-y-16">
            {/* Data Collection and Use */}
            <section>
              <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-6">
                Data Collection and Use
              </h2>

              <p className="text-gray-800 leading-relaxed text-[17px] sm:text-lg">
                Faremint LLC and its subsidiaries and affiliated companies may collect, use, and share your Personal Information in various ways as outlined below.
              </p>

              <div className="mt-8 space-y-10">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    1. Sign Up
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    When you sign up for a Faremint account, we collect the following information:
                  </p>
                  <ul className="mt-3 list-disc pl-6 space-y-1.5 text-gray-700">
                    <li>Your name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Date of birth</li>
                    <li>Financial information, including your bank account number and routing number.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    2. Deposit Funds
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    When you deposit funds into your Faremint account, we collect your bank account information.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    3. Send Remittance
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    When you send remittance through Faremint, we collect the following recipient information:
                  </p>
                  <ul className="mt-3 list-disc pl-6 space-y-1.5 text-gray-700">
                    <li>Recipient&apos;s name</li>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Amount of money sent</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Purposes of Data Collection */}
            <section>
              <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-6">
                Purposes of Data Collection
              </h2>
              <p className="text-gray-800 leading-relaxed text-[17px] sm:text-lg">
                We may use your Personal Information for the following purposes:
              </p>
              <ul className="mt-5 list-disc pl-6 space-y-2.5 text-gray-700 text-[17px] sm:text-lg">
                <li>To provide you with our services.</li>
                <li>To process your transactions.</li>
                <li>To prevent fraud and other illegal activities.</li>
                <li>To improve our products and services.</li>
                <li>To send you marketing communications.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionLink({ title, active = false }: { title: string; active?: boolean }) {
  return (
    <div
      className={`
        text-xl sm:text-2xl font-medium
        ${active ? "text-orange-600" : "text-gray-600 hover:text-orange-600"}
        transition-colors cursor-pointer
      `}
    >
      {title}
    </div>
  );
}