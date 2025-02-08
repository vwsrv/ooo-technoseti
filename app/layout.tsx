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
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ru" className={`${montserrat.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
