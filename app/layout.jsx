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
        <meta name="google-site-verification" content="PU85YcSvNVLnD66cxW67fVE1Xig2NKBngonkdHmyb5s" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
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
