import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FastTools - Herramientas online gratuitas",
  description: "FastTools ofrece herramientas online gratuitas para texto, generadores y calculadoras. Sin registro, sin instalación.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Navbar />

        {/* AD SLOT: top banner */}
        <div id="ad-top" className="w-full max-w-5xl mx-auto px-4 pt-4" />

        <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
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
