import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[rgba(247,246,248,1)] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* App Buttons */}
          <div className="flex flex-col gap-4">
            <Image
              src="/App store.svg"
              alt="Download on the App Store"
              width={160}
              height={48}
              className="cursor-pointer"
            />
            <Image
              src="/Google play.svg"
              alt="Get it on Google Play"
              width={160}
              height={48}
              className="cursor-pointer"
            />
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-[#0F172A] mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="#">About us</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">FAQ</Link></li>
              <li><Link href="#">Contact us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-[#0F172A] mb-4">
              Legal
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/TermsAndPrivacy">Terms & privacy</Link></li>
              <li><Link href="#">Patriot Act</Link></li>
              <li><Link href="#">Consent</Link></li>
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="text-sm font-semibold text-[#0F172A] mb-4">
              Get in touch
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>128 City Road, London, United Kingdom</li>
              <li>+1 (234) 567-890</li>
              <li>info@faremit.com</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

  {/* Left side (empty or you can keep something later) */}
  <div></div>

  {/* RIGHT SIDE: Logo + Social Icons + Copyright */}
  <div className="flex items-center gap-8">

    {/* Logo */}
    <div className="flex items-center">
      <Image
        src="/logo.svg"
        alt="Faremit"
        width={165}
        height={56}
      />
    </div>

    {/* Social Icons */}
<div className="flex items-center gap-6">
  <Link href="#" aria-label="Twitter">
    <Image
      src="/twitter.svg"
      alt="Twitter"
      width={20}
      height={20}
      className="cursor-pointer hover:opacity-80"
    />
  </Link>

  <Link href="#" aria-label="LinkedIn">
    <Image
      src="/linkedin.svg"
      alt="LinkedIn"
      width={20}
      height={20}
      className="cursor-pointer hover:opacity-80"
    />
  </Link>

  <Link href="#" aria-label="Facebook">
    <Image
      src="/facebook.svg"
      alt="Facebook"
      width={20}
      height={20}
      className="cursor-pointer hover:opacity-80"
    />
  </Link>
</div>


    {/* Copyright */}
    <p className="text-sm text-gray-500 whitespace-nowrap">
      © Faremit 2026
    </p>

  </div>
</div>

         
        </div>
    </footer>
  );
};

export default Footer;
