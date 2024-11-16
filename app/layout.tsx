import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "./components/navigation_bar";
import BootstrapClient from "./components/bootstrap_client"
import { LinkedInInsightTag } from "nextjs-linkedin-insight-tag";

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
        <BootstrapClient/>
        <script async src="https://tally.so/widgets/embed.js"></script>
        <LinkedInInsightTag/>
      </body>
    </html>
  );
}
