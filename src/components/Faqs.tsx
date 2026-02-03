import Link from "next/link";
import Accordion from "../components/common/Accordion";
import Button from "../components/common/Button";

export default function FAQPage() {
  const faqs = [
    {
      question: "How do I initiate a money transfer?",
      answer:
        "Your privacy is critically important to us. We have a few fundamental principles. We are thoughtful about the personal information we ask you to provide and the personal information that we collect about you through the operation of our services.",
    },
    {
      question: "What information do I need to send money?",
      answer: "You need the recipient's full name, account number, and bank details.",
    },
    {
      question: "How long does it take for a money transfer to be completed?",
      answer: "Transfers usually take 1-3 business days depending on the banks involved.",
    },
    {
      question: "Are there fees associated with money transfers?",
      answer: "Fees depend on the transfer amount and the recipient's country.",
    },
    {
      question: "Can I cancel a money transfer?",
      answer: "Yes, you can cancel a transfer before it is processed.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FFF6F1] flex flex-col items-center px-6 py-20 space-y-24">
      {/* FAQ Section */}
      <section className="max-w-5xl w-full bg-white p-8 rounded-xl shadow-md flex flex-col md:flex-row md:space-x-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Some questions</h2>
          <p className="text-gray-600 mb-6">
            Our dedicated support team is here to assist you every step of the way, with whatever answer or guidance you need.
          </p>
          <div className="flex gap-4">
            <Button text="Contact Us" variant="secondary" />
            <Button text="Visit FAQ" variant="primary" />
          </div>
        </div>

        <div className="md:w-1/2 space-y-2">
          {faqs.map((faq, index) => (
            <Accordion key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-5xl bg-orange-500 rounded-3xl px-6 py-16 md:py-20 flex justify-center items-center">
        <div className="text-center">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-6">
            Experience swift, secure, and cost-effective<br />
            international transactions.
          </h3>

          {/* Custom Button */}
          <div className="inline-block">
            <Link href="/signup">
            <button className="bg-white text-orange-500 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
              Sign Up Now
            </button>
            </Link>
          </div>
        </div>
      </section>


    </main>
  );
}