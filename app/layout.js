import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Iyed Chaabane - Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer specializing in Java, Spring Boot, React, and Angular. Experienced in building high-availability POS solutions, microservices, and real-time monitoring systems. Available for collaboration on challenging projects.",
  keywords: [
    "Iyed Chaabane",
    "Full Stack Developer",
    "Software Engineer",
    "Java Developer",
    "Spring Boot",
    "React Developer",
    "Angular Developer",
    "Portfolio",
    "Web Development",
    "Tunisia Developer"
  ],
  authors: [{ name: "Iyed Chaabane" }],
  creator: "Iyed Chaabane",
  publisher: "Iyed Chaabane",
  metadataBase: new URL('https://iyedchaabane.github.io/portfolio'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://iyedchaabane.github.io/portfolio',
    title: 'Portfolio of Iyed Chaabane - Full Stack Software Engineer',
    description: 'Full Stack Software Engineer specializing in Java, Spring Boot, React, and Angular. Experienced in building high-availability solutions.',
    siteName: 'Iyed Chaabane Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio of Iyed Chaabane - Full Stack Software Engineer',
    description: 'Full Stack Software Engineer specializing in Java, Spring Boot, React, and Angular.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
