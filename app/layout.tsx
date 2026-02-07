import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Apex AI — AI Consulting & Development",
  description:
    "We help companies adopt AI with clarity. Strategy consulting, full-stack development, and production-ready AI products.",
  keywords: ["AI consulting", "AI development", "machine learning", "AI strategy", "full-stack AI"],
  openGraph: {
    title: "Apex AI — AI Consulting & Development",
    description:
      "We help companies adopt AI with clarity. Strategy consulting, full-stack development, and production-ready AI products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
