import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Spinner, ThemeModeScript } from "flowbite-react";
import { Suspense } from "react";
import { Header } from "@/app/components/Header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Real Charts",
  description: "что то для CEO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>
        <Header />
        <div className="pt-24">
          <Suspense fallback={<Spinner />}>{children}</Suspense>
        </div>
      </body>
    </html>
  );
}
