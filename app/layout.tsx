import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "./components/navigation_bar";

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
        <Footer/>
        <script async src="https://tally.so/widgets/embed.js"></script>
      </body>
    </html>
  );
}
