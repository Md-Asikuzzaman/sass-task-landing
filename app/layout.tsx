import type { Metadata, Viewport } from 'next';
import { DM_Sans } from 'next/font/google';
import clsx from 'clsx';
import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sass Time Landing Page',
  description: 'One Task at a Time',
  openGraph: {
    title: 'Sass Time Landing Page',
    description: 'One Task at a Time',
    url: 'https://sass-time-landing.vercel.app',
    siteName: 'Sass Time',
    images: [
      {
        url: 'https://sass-time-landing.vercel.app/images/logo/logo.png', // Absolute URL for OG image
        width: 1200, // Recommended size for OG
        height: 630,
        alt: 'Sass Time Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sass Time Landing Page',
    description: 'One Task at a Time',
    images: ['https://sass-time-landing.vercel.app/images/logo/logo.png'], // Absolute URL for Twitter image
  },
};

export const viewport: Viewport = {
  themeColor: 'black',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/images/logo/logo.png' sizes='any' />
      </head>
      <body className={clsx(dmSans.className, 'antialiased')}>{children}</body>
    </html>
  );
}
