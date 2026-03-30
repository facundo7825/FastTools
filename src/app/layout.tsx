import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const siteUrl = "https://fasttools.app";
const defaultTitle = "FastTools | Herramientas online gratuitas";
const defaultDescription =
  "Herramientas online gratuitas para texto, generadores y calculadoras. Rapidas, simples y sin registro.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "FastTools",
  title: {
    default: defaultTitle,
    template: "%s | FastTools",
  },
  description: defaultDescription,
  keywords: [
    "herramientas online",
    "utilidades web",
    "contador de palabras",
    "contador de caracteres",
    "generador QR",
    "calculadoras online",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "FastTools",
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={spaceGrotesk.variable}>
      <body className="min-h-screen flex flex-col">
        {gaId ? <Analytics gaId={gaId} /> : null}
        {adsenseClient ? (
          <Script
            id="adsense-init"
            async
            strategy="lazyOnload"
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
          />
        ) : null}
        <Navbar />
        <div id="ad-top" className="w-full max-w-6xl mx-auto px-4 pt-4" />
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
          {children}
          <div id="ad-content" className="w-full mt-8" />
        </main>
        <div id="ad-bottom" className="w-full max-w-6xl mx-auto px-4 pb-4" />
        <Footer />
      </body>
    </html>
  );
}
