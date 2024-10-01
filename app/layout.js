import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import './scrollbar.css'
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script";
import ScrollToTopButton from "@/Components/ScrollToTopButton/ScrollToTopButton";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dhole Patil Ganpati - Pune, Maharashtra, India",
  description: "Dhole Patil Ganpati Mandir is a famous temple located in Pune, Maharashtra, India. It is dedicated to Lord Ganesha, who is worshipped as the primary deity in the temple. The temple is located in the heart of Pune city and is a popular destination for locals and tourists alike.",
  keywords: ['Dhole Patil Ganpati', 'Dhole Patil', 'Pune', 'Kharadi', 'Ganpati', 'donate', 'dhole patil ganpati mandir'],
  openGraph: {
    title: 'Dhole Patil Ganpati - Pune, Maharashtra, India',
    description: 'Dhole Patil Ganpati Mandir is a famous temple located in Pune, Maharashtra, India. It is dedicated to Lord Ganesha, who is worshipped as the primary deity in the temple. The temple is located in the heart of Pune city and is a popular destination for locals and tourists alike.',
    url: 'https://dholepatilganpati.com',
    siteName: 'Dhole Patil Ganpati',
    images: [
      {
        url: 'https://nextjs.org/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
  },
  verification: {
    google: 'google',
  },
};


export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <script
                    dangerouslySetInnerHTML={{
                        __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-5NSFPC9R');
              `,
                    }}
                /> */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-912EEFYF1S"></Script>
      {/* <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-912EEFYF1S');
              `,
                }}
            /> */}
      {/* <noscript>
                <iframe
                    src={`https://www.googletagmanager.com/ns.html?id=GTM-5NSFPC9R`}
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                ></iframe>
            </noscript> */}
      <body className={inter.className}>
        {children}
        <ScrollToTopButton />
        <Analytics />
      </body>
    </html>
  );
}
