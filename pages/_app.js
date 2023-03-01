import "../styles/globals.css";
import "../styles/locomotive-scroll.css";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id="script1"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-VPJQLG48YT`}
      />

      <Script id="script2" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-VPJQLG48YT', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
