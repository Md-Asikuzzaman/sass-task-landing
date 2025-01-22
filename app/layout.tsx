import type { Metadata, Viewport } from 'next';
import { DM_Sans } from 'next/font/google';
import clsx from 'clsx';
import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sass Task Landing Page',
  description: 'One Task at a Time',
  icons: {
    icon: ""
  },
  openGraph: {
    title: 'Sass Task Landing Page',
    description: 'One Task at a Time',
    url: 'https://sass-task-landing.vercel.app',
    siteName: 'Sass Task',
    images: [
      {
        url: 'https://sass-task-landing.vercel.app/images/logo/logo.png', // Absolute URL for OG image
        width: 1200, // Recommended size for OG
        height: 630,
        alt: 'Sass Task Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sass Task Landing Page',
    description: 'One Task at a Time',
    images: ['https://sass-task-landing.vercel.app/images/logo/logo.png'], // Absolute URL for Twitter image
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
        <link
          rel='icon'
          href='/images/logo/logo.png'
          type='image/x-icon'
          sizes='16x16'
        />
      </head>
      <body className={clsx(dmSans.className, 'antialiased')}>{children}</body>
    </html>
  );
}
