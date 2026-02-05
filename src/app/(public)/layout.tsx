
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full overflow-x-hidden bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
