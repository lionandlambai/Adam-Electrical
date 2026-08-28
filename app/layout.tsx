import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://adam-electrical-24-hour.melisha-interiors.chatgpt.site'),
  title: 'Adam Electrical, Plumbing & Air-conditioning | 24-Hour Services',
  description: 'Domestic and industrial electrical, backup power, security, maintenance and property services. Call Adam on 081 420 8815 or 076 802 1369.',
  openGraph: {
    title: 'Adam Electrical, Plumbing & Air-conditioning',
    description: 'Electrical, backup power, security and property services — available 24 hours.',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'Adam Electrical Services — 24-hour service' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adam Electrical, Plumbing & Air-conditioning',
    description: 'Electrical, backup power, security and property services — available 24 hours.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
