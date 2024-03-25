import React from 'react';
import '../src/app/styles/normalize.css';
import '../src/app/styles/global.css';

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ru" className={``}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
