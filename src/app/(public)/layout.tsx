// app/(public)/layout.tsx
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
