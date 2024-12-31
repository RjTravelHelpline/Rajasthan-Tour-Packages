// 'use client';
import dynamic from 'next/dynamic';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import '../styles/components.scss';
import '../styles/blog.scss';

// Dynamically import components with SSR disabled
const NavbarSwitcher = dynamic(() => import('@/components/NavBarSwitcher'), {
  ssr: false,
});
const FooterSwitcher = dynamic(() => import('@/components/FooterSwitcher'), {
  ssr: false,
});
const BackToTop = dynamic(() => import('@/components/BackToTop'), {
  ssr: false,
});
const BottomSocials = dynamic(() => import('@/components/BottomSocials'), {
  ssr: false,
});
const ChatBot = dynamic(() => import('@/components/ChatBot'), { ssr: false });
import GoogleAnalyticsClient from '@/components/GoogleAnalyticsClient';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Rajasthan Tour Packages" />
        <meta name="publisher" content="Rajasthan Tour Packages" />
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="PU85YcSvNVLnD66cxW67fVE1Xig2NKBngonkdHmyb5s"
        />
        <link rel="icon" href="/rajasthan-travel-helpline.png" />
        <title>Rajasthan Tour Packages | Explore Incredible Rajasthan</title>
        {/* <!-- Preload font files --> */}
        <link
          rel="preload"
          href="/Fonts/Poppins/Poppins-Regular.woff2"
          as="font"
          type="font/woff2"
          crossorigin="anonymous"
        />
        <link
          rel="preload"
          href="/Fonts/Poppins/Poppins-Bold.woff2"
          as="font"
          type="font/woff2"
          crossorigin="anonymous"
        />
        <link
          rel="preload"
          href="/Fonts/Raleway/Raleway-Regular.woff2"
          as="font"
          type="font/woff2"
          crossorigin="anonymous"
        />
        <link
          rel="preload"
          href="/Fonts/Raleway/Raleway-Bold.woff2"
          as="font"
          type="font/woff2"
          crossorigin="anonymous"
        />
      </head>
      <body>
        <GoogleAnalyticsClient />
        <NavbarSwitcher />
        {children}
        <FooterSwitcher />
        <BackToTop />
        <BottomSocials />
        <ChatBot />
      </body>
    </html>
  );
}
