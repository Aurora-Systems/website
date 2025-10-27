import Head from "next/head";
import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "./components/navigation_bar";
import BootstrapClient from "./components/bootstrap_client"
import { LinkedInInsightTag } from "nextjs-linkedin-insight-tag";
import Script from "next/script";

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
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-EV70L5Z3LW"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EV70L5Z3LW');
            `,
          }}
        />
      </Head>
      <body className={`${league.className} `}>
        <div className="container">

        <Navbar/>
        {children}
        <BootstrapClient/>
        <script async src="https://tally.so/widgets/embed.js"></script>
        <LinkedInInsightTag/>
                </div>
                        <Footer/>
                        <Script id="zoho-salesiq" strategy="afterInteractive">
          {`
            var $zoho=$zoho || {};
            $zoho.salesiq = $zoho.salesiq || {
              widgetcode:"siqf22096acdd69860087f120f3a2ad5f5dda6df0bd5c3334259ad020db051987f8",
              values:{},
              ready:function(){}
            };
            var d=document;
            s=d.createElement("script");
            s.type="text/javascript";
            s.id="zsiqscript";
            s.defer=true;
            s.src="https://salesiq.zoho.com/widget";
            t=d.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(s,t);
          `}
        </Script>
{/* <script async type="text/javascript">var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:"siqf22096acdd69860087f120f3a2ad5f5dda6df0bd5c3334259ad020db051987f8", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);</script> */}
      </body>
    </html>
  );
}
