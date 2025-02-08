import React from 'react';
import '../src/app/styles/normalize.css';
import '../src/app/styles/global.css';
import { montserrat, roboto } from '@/app/fonts/fonts';
import { metaData as meta } from '../src/shared/constants/metadata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  icons: meta.icons,
  manifest: meta.manifest,
  appleWebApp: {
    title: meta.appleMobileWebAppTitle,
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: 'website',
    url: 'https://technoseti.ru',
    images: [
      {
        url: 'https://technoseti.ru/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Техно-Сети',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
    images: ['https://https://technoseti.ru/twitter-image.jpg'],
  },
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ru" className={`${montserrat.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
