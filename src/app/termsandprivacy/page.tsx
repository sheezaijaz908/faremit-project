import React from "react";

export default function TermsAndPrivacy() {
  return (
    <section className="min-h-screen bg-[#FBF7F4] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* PAGE TITLE */}
        <h1 className="text-[42px] font-bold text-[#FE5719] mb-3">
          Terms & Privacy
        </h1>

        <p className="text-sm text-gray-600 mb-10">
          <span className="font-semibold">Last Updated:</span> 1st of September, 2023
        </p>

        <div className="border-t border-gray-300 pt-12 grid grid-cols-1 md:grid-cols-4 gap-14">

          {/* LEFT SIDEBAR */}
          <aside className="md:col-span-1">
            <ul className="space-y-6 text-sm font-medium text-[#0A1B44]">
              <li className="text-[#FE5719] cursor-pointer">
                Data Collection and Use
              </li>
              <li className="cursor-pointer hover:text-[#FE5719]">
                Purposes of Data Collection
              </li>
              <li className="cursor-pointer hover:text-[#FE5719]">
                Sharing of Personal Information
              </li>
              <li className="cursor-pointer hover:text-[#FE5719]">
                Your Rights
              </li>
              <li className="cursor-pointer hover:text-[#FE5719]">
                Data Retention
              </li>
              <li className="cursor-pointer hover:text-[#FE5719]">
                Security Measures
              </li>
              <li className="cursor-pointer hover:text-[#FE5719]">
                Questions
              </li>
            </ul>
          </aside>

          {/* RIGHT CONTENT */}
          <div className="md:col-span-3 space-y-14 text-[15px] leading-7 text-gray-700">

            {/* SECTION 1 */}
            <div>
              <h2 className="text-xl font-semibold text-[#FE5719] mb-4">
                Data Collection and Use
              </h2>

              <p>
                Faremint LLC and its subsidiaries and affiliated companies may
                collect, use, and share your Personal Information in various
                ways as outlined below:
              </p>

              <ul className="list-decimal ml-6 mt-4 space-y-2">
                <li>
                  <strong>Sign Up:</strong> When you sign up for a Faremint
                  account, we collect the following information: Your name,
                  email address, phone number, date of birth, financial
                  information, including your bank account number and routing
                  number.
                </li>
                <li>
                  <strong>Deposit Funds:</strong> When you deposit funds into
                  your Faremint account, we collect your bank account
                  information.
                </li>
                <li>
                  <strong>Send Remittance:</strong> When you send remittance
                  through Faremint, we collect the following recipient
                  information: Recipient's name, address, phone number, and
                  amount of money sent.
                </li>
              </ul>
            </div>

            {/* SECTION 2 */}
            <div>
              <h2 className="text-xl font-semibold text-[#FE5719] mb-4">
                Purposes of Data Collection
              </h2>

              <p>
                We may use your Personal Information for the following purposes:
                To provide you with our services. To process your transactions.
                To prevent fraud and other illegal activities. To improve our
                products and services. To send you marketing communications.
              </p>
            </div>

            {/* SECTION 3 */}
            <div>
              <h2 className="text-xl font-semibold text-[#FE5719] mb-4">
                Sharing of Personal Information
              </h2>

              <p>
                We may share your Personal Information with the following third
                parties: Our service providers who assist us in delivering our
                services. Financial institutions that help facilitate your
                transactions. Government agencies as required by law. We do not
                sell your Personal Information to third parties for their
                marketing purposes without your consent.
              </p>
            </div>

            {/* SECTION 4 */}
            <div>
              <h2 className="text-xl font-semibold text-[#FE5719] mb-4">
                Your Rights
              </h2>

              <p>
                You have certain rights regarding your Personal Information,
                including: Access to your data. The ability to correct, delete,
                or restrict its processing. The right to object to processing
                and withdraw your consent.<br />
                To exercise these rights, please contact us at legal@faremint.com.
              </p>
            </div>

             {/* SECTION 5 */}
            <div>
              <h2 className="text-xl font-semibold text-[#FE5719] mb-4">
                Data Retention
              </h2>

              <p>
                We will retain your Personal Information for as long as necessary 
                to provide our services and for legitimate business purposes.
              </p>
            </div>

             {/* SECTION 6 */}
            <div>
              <h2 className="text-xl font-semibold text-[#FE5719] mb-4">
                Security Measures 
              </h2>

              <p>
                We take the security of your Personal Informationsseriously. 
                We have implemented appropriate technical and organizational measures to protect it from 
                unauthorized access, use, disclosure, alteration, or destruction.
              </p>
            </div>

             {/* SECTION 7 */}
            <div>
              <h2 className="text-xl font-semibold text-[#FE5719] mb-4">
                Questions
              </h2>

              <p>
                If you have any questions about our privacy policy, please contact us at{" "}  
                <span className="text-black font-medium">
                  legal@faremint.com
                </span>
              </p>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
