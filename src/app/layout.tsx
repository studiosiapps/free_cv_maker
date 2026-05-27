import type { Metadata } from "next";
import { APP_NAME, APP_DESCRIPTION, APP_URL } from "@/lib/constants";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: `${APP_NAME} - Create Professional CVs Online Free`,
  },
  description: APP_DESCRIPTION,
  keywords: [
    "free CV maker",
    "resume builder",
    "CV template",
    "professional resume",
    "ATS friendly resume",
    "create CV online",
    "free resume builder",
    "CV creator",
  ],
  authors: [{ name: APP_NAME }],
  creator: APP_NAME,
  publisher: APP_NAME,
  metadataBase: new URL(APP_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: APP_URL,
    siteName: APP_NAME,
    title: `${APP_NAME} - Create Professional CVs Online Free`,
    description: APP_DESCRIPTION,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: APP_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} - Create Professional CVs Online Free`,
    description: APP_DESCRIPTION,
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: APP_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: APP_NAME,
              description: APP_DESCRIPTION,
              url: APP_URL,
              applicationCategory: "Multimedia",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />

        <Script
  async
  strategy="afterInteractive"
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8201546963715274"
  crossOrigin="anonymous"
/>
      </head>
      <body className="min-h-screen flex flex-col">
        <Toaster />
        {children}
      </body>
    </html>
  );
}
