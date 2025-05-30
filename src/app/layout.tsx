import type { Metadata } from "next";
import { Raleway, Nunito_Sans } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Charm Bar",
  description: "Where buying jewelries feel like a breeze",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${nunitoSans.variable} antialiased md:overflow-hidden`}
      >
        {children}
        <div className="hidden md:grid fixed inset-0 z-[9999] place-content-center bg-light">
          This application is not available on desktops.
        </div>
      </body>
    </html>
  );
}
