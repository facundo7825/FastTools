import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FastTools",
  description: "Herramientas online gratuitas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Navbar />

        {/* AD SLOT: top banner */}
        <div id="ad-top" className="w-full max-w-5xl mx-auto px-4 pt-4" />

        <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8">
          {children}

          {/* AD SLOT: in-content */}
          <div id="ad-content" className="w-full mt-8" />
        </main>

        {/* AD SLOT: above footer */}
        <div id="ad-bottom" className="w-full max-w-5xl mx-auto px-4 pb-4" />

        <Footer />
      </body>
    </html>
  );
}
