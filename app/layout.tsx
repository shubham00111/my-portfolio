import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import { spaceGrotesk } from "./fonts";
import { Provider } from "@/components/providers/Provider";
import Footer from "@/components/Footer";

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
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
