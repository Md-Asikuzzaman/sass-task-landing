import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import clsx from 'clsx';
import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sass Time Landing Page',
  description: 'One Task at a Time',
  icons: {
    icon: '/images/logo/logo.png',
    shortcut: '/images/logo/logo.png',
    apple: '/images/logo/logo.png',
  },
  openGraph: {
    title: 'Sass Time Landing Page',
    description: 'One Task at a Time',
    url: 'https://sass-time-landing.com',
    siteName: 'Sass Time',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 800,
        height: 600,
        alt: 'Sass Time Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sass Time Landing Page',
    description: 'One Task at a Time',
    images: ['/images/logo/logo.png'],
  },
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx(dmSans.className, 'antialiased')}>{children}</body>
    </html>
  );
}
