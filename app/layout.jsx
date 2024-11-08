
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import "../styles/components.scss";
import "../styles/app.scss";
import "../styles/routes.scss";
import "../styles/blog.scss";
import GoogleAnalyticsClient from '@/components/GoogleAnalyticsClient';
import NavbarSwitcher from '@/components/NavBarSwitcher';
import FooterSwitcher from '@/components/FooterSwitcher';

// Metadata for the application
export const metadata = {
  icons: {
    icon: '/rajasthan-travel-helpline.png',
  },
  charset: "utf-8",
  robots: {
    index: true,
    follow: true,
  },
  meta: [
    {
      name: 'google-site-verification',
      content: 'PU85YcSvNVLnD66cxW67fVE1Xig2NKBngonkdHmyb5s',
    },
  ],
  authors: [{ name: "Rajasthan Tour Packages", url: "https://www.rajasthantourpackages.in" }],
  publisher: "Rajasthan Tour Packages",

};
export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preloading Google Fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Lobster&display=swap"
          as="style"
        />
        {/* Apply the font after preload */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Lobster&display=swap"
        />
        <noscript>
          {/* Fallback if JavaScript is disabled */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Lobster&display=swap"
          />
        </noscript>
      </head>
      <body>
        <GoogleAnalyticsClient />
        <NavbarSwitcher />
        {children}
        <FooterSwitcher />
      </body>
    </html>
  );
}
