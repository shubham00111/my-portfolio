import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import { spaceGrotesk } from "./fonts";
import { Provider } from "@/components/providers/Provider";
import Footer from "@/components/Footer";
import Oneko from "@/components/Oneko";

export const metadata: Metadata = {
  title: "Shubham Rawat — Software Engineer",
  description:
    "Frontend Engineer with 3.5 years of experience building fintech products at TSYS. Specialized in React, TypeScript, and AWS cloud architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.className} antialiased`}>
        <Provider>
          <Header />
          {/* overflow-x-clip prevents the Separator pseudo-elements from causing a scrollbar */}
          <div className="overflow-x-clip px-2">
            <div className="border-line mx-auto max-w-3xl border-x">
              {children}
              <Footer />
            </div>
          </div>
        </Provider>
        <Oneko />
      </body>
    </html>
  );
}
