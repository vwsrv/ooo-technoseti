import React from 'react';
import '../src/app/styles/normalize.css';
import '../src/app/styles/global.css';
import { montserrat, roboto } from '@/app/fonts/fonts';

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ru" className={`${montserrat.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
