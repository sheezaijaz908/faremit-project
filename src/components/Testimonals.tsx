export default function Testimonials() {
  return (
    <section className="bg-[#FFF7F2] py-28 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <span className="inline-block mb-4 px-5 py-1 rounded-full text-sm bg-[#FFE5D8] text-black font-medium">
          Testimonials
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A1B44] leading-tight">
          Beyond Transactions, <br /> Building Trust
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-gray-600">
          Hear what our users have to say.
        </p>

        {/* Cards */}
        <div className="mt-20 text-left space-y-4">

          {/* ===== ROW 1 ===== */}
          <div className="flex flex-col md:flex-row gap-4">

            {/* Card 1 */}
            <div className="rounded-2xl p-6 md:p-10 bg-[rgba(255,238,232,1)] flex-1 md:flex-[1.1] min-h-[240px]">
              <p className="text-[#2E2E2E] leading-relaxed">
                I've been using Faremit for a few months now, and I couldn't be
                happier! The app is super easy to use, and I can send money to my
                family abroad in just a few minutes.
              </p>

              <div className="mt-8 md:mt-10">
                <h4 className="font-semibold text-[#0A1B44]">
                  Akwa Abasiekeme
                </h4>
                <p className="text-sm text-gray-600">Freelancer</p>
              </div>
            </div>


            {/* Card 2 */}
            <div className="rounded-2xl p-6 md:p-10 bg-[rgba(238,237,252,1)] flex-1 min-h-[240px]">
              <p className="text-[#2E2E2E] leading-relaxed">
                The transfer fees are really low compared to other services, and
                the exchange rates are great.
              </p>

              <div className="mt-8 md:mt-10">
                <h4 className="font-semibold text-[#0A1B44]">
                  Sarmad Khalid
                </h4>
                <p className="text-sm text-gray-600">
                  International Student
                </p>
              </div>
            </div>


          </div>

          {/* ===== ROW 2 ===== */}
          <div className="flex flex-col md:flex-row gap-4">

            {/* Card 3 */}
            <div className="rounded-2xl p-6 md:p-10 bg-[rgba(247,246,248,1)] flex-1 min-h-[240px]">
              <p className="text-[#2E2E2E] leading-relaxed">
                I love being able to track my payments in real time and check my
                transfer history anytime. Plus, their customer support is always
                quick and helpful.
              </p>

              <div className="mt-8 md:mt-10">
                <h4 className="font-semibold text-[#0A1B44]">
                  Mo Bamba
                </h4>
                <p className="text-sm text-gray-600">
                  CEO, Africavase
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl p-6 md:p-10 bg-[rgba(239,254,244,1)] flex-1 md:flex-[1.1] min-h-[240px]">
              <p className="text-[#2E2E2E] leading-relaxed">
                I've been using Faremit for a few months now, and I couldn't be
                happier! The app is super easy to use, and I can send money to my
                family abroad in just a few minutes.
              </p>

              <div className="mt-8 md:mt-10">
                <h4 className="font-semibold text-[#0A1B44]">
                  Josh Allen
                </h4>
                <p className="text-sm text-gray-600">
                  Pro Bowler
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}