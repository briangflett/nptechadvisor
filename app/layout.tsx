import "@/global.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
// import "node_modules/react-modal-video/css/modal-video.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nptechadvisor.com"),
  title: {
    default: "NPTechAdvisor",
    template: "%s | NPTechAdvisor",
  },
  description: "Technology advice for nonprofits.",
  openGraph: {
    title: "NPTechadvisor",
    description: "Technology advice for nonprofits.",
    url: "https://nptechadvisor.com",
    siteName: "NPTechadvisor",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Brian Flett",
    card: "summary_large_image",
  },
  verification: {
    google: "aB4s0P3F0Vv5HgE8TS2A0jfkRCl0zQzU8eW6KHfWuk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
