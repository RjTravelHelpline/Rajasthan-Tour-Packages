'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import '../styles/components.scss';
import '../styles/routes.scss';
import '../styles/blog.scss';
import '../styles/fonts.scss';
import NavbarSwitcher from '@/components/NavBarSwitcher';
import FooterSwitcher from '@/components/FooterSwitcher';
import BackToTop from '@/components/BackToTop';
import BottomSocials from '@/components/BottomSocials';
import ChatBot from '@/components/ChatBot';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const GoogleAnalyticsClient = dynamic(
  () => import('@/components/GoogleAnalyticsClient'),
  { ssr: false }
);
const AppLoader = dynamic(() => import('@/components/AppLoader'), {
  ssr: false,
});
// const NavbarSwitcher = dynamic(() => import('@/components/NavBarSwitcher'), {
//   ssr: false,
// });
// const FooterSwitcher = dynamic(() => import('@/components/FooterSwitcher'), {
//   ssr: false,
// });
// const BackToTop = dynamic(() => import('@/components/BackToTop'), {
//   ssr: false,
// });
// const BottomSocials = dynamic(() => import('@/components/BottomSocials'), {
//   ssr: false,
// });
// const ChatBot = dynamic(() => import('@/components/ChatBot'), {
//   ssr: false,
// });

export default function RootLayout({ children }) {
  const [isAppLoading, setIsAppLoading] = useState(true);

  // // Handle loading state to control when to show the loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoading(false);
      clearTimeout(timer);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
      </head>
      <body>
        <GoogleAnalyticsClient />
        {isAppLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <NavbarSwitcher />
            {children}
            <FooterSwitcher />
            <BackToTop />
            <BottomSocials />
            <ChatBot />
          </>
        )}
      </body>
    </html>
  );
}
