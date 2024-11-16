import Head from "next/head";
import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "./components/navigation_bar";
import BootstrapClient from "./components/bootstrap_client"

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
      <Head>
      <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
            _linkedin_partner_id = "7844609";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `
        }} />
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `
        }} />
        <noscript>
          <img height="1" width="1" style={{display: 'none'}} alt="" src="https://px.ads.linkedin.com/collect/?pid=7844609&fmt=gif" />
        </noscript>
      </Head>
      <body className={`${league.className} container`}>
        <Navbar/>
        {children}
        <Footer/>
        <BootstrapClient/>
        <script async src="https://tally.so/widgets/embed.js"></script>
      </body>
    </html>
  );
}
