import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navigation_bar";

const league = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aurora",
  description: "Accelerating Digital Adoption.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${league.className} container`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
