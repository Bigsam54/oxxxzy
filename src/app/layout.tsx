import type { Metadata } from 'next';
import { Instrument_Serif } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import CounterInit from '@/components/CounterInit';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument',
});

export const metadata: Metadata = {
  title: "Oxzy | Collaborating for Ghana's Future",
  description:
    "Oxzy - Collaborating for Ghana's Future. Join a new generation of innovators, entrepreneurs, and builders.",
  openGraph: {
    type: 'website',
    title: "Oxzy | Collaborating for Ghana's Future",
    description: 'Join a new generation of innovators, entrepreneurs, and builders across Ghana.',
    images: ['https://res.cloudinary.com/dv1ignqxh/image/upload/v1774984484/logo_k5xpwm.png'],
    siteName: 'Oxzy',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Oxzy | Collaborating for Ghana's Future",
    images: ['https://res.cloudinary.com/dv1ignqxh/image/upload/v1774984484/logo_k5xpwm.png'],
  },
  icons: {
    icon: 'https://res.cloudinary.com/dv1ignqxh/image/upload/v1774984484/logo_k5xpwm.png',
    apple: 'https://res.cloudinary.com/dv1ignqxh/image/upload/v1774984484/logo_k5xpwm.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={instrumentSerif.variable}>
        <ScrollReveal />
        <CounterInit />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
