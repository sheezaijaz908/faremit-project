import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/Herosection";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonals";
import FAQPage from "../components/Faqs";
import Home from "../components/Home";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FFE8D9] min-h-screen">
        <Navbar />
        {children}
        <Home />
        <HeroSection />
        <HowItWorks />
        <Testimonials />
        <FAQPage />

        <Footer />
      </body>
    </html>
  );
}
