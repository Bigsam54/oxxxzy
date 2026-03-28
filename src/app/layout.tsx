import type { Metadata } from "next";
import { Inter, Titillium_Web } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CounterInit from "@/components/CounterInit";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-head",
});

export const metadata: Metadata = {
  title: "Oxzy | Collaborating for Ghana's Future",
  description: "Oxzy - Collaborating for Ghana's Future. Join a new generation of innovators, entrepreneurs, and builders.",
  openGraph: {
    type: "website",
    title: "Oxzy | Collaborating for Ghana's Future",
    description: "Join a new generation of innovators, entrepreneurs, and builders across Ghana.",
    images: ["https://res.cloudinary.com/dopscbnty/image/upload/v1774229861/OXY_logo_p8pchr.jpg"],
    siteName: "Oxzy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oxzy | Collaborating for Ghana's Future",
    images: ["https://res.cloudinary.com/dopscbnty/image/upload/v1774229861/OXY_logo_p8pchr.jpg"],
  },
  icons: {
    icon: "https://res.cloudinary.com/dopscbnty/image/upload/v1774229861/OXY_logo_p8pchr.jpg",
    apple: "https://res.cloudinary.com/dopscbnty/image/upload/v1774229861/OXY_logo_p8pchr.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${titillium.variable}`}>
        <ScrollReveal />
        <CounterInit />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
