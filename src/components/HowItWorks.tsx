import Image from "next/image";

const steps = [
  { image: "/1Create&verify.svg" },
  { image: "/2Add&send.svg" },
  { image: "/3Keep&track.svg" },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#FFF7F2] py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm bg-[#FFE1D0] text-black font-medium">
          How it works
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1B44]">
          How to send money with <br /> Faremit
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Securely send money with 3 easy steps via our web or mobile app.
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-sm w-[400px] h-[400px] overflow-hidden flex items-center justify-center"
            >
              {/* Image exactly same size */}
              <div className="relative w-full h-full">
                <Image
                  src={step.image}
                  alt={`Step image ${index + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
