import { FC, PropsWithChildren } from 'react';
import './styles/normalize.css';
import './styles/global.css';
import { montserrat, roboto } from '@/app/fonts/fonts';
import { metaData as meta } from '@/shared';
import { Metadata } from 'next';
import { Footer, SidebarNav } from '@/widgets';
import { HeaderNavigation } from '@/features';
import { PageWrapper } from './page-wrapper';
import layoutClasses from './styles/layout.module.scss';

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

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ru" className={`${montserrat.variable} ${roboto.variable}`}>
      <body>
        <HeaderNavigation />
        <SidebarNav />
        <div className={layoutClasses.mainLayoutWrapper}>
          <main>
            <PageWrapper>{children}</PageWrapper>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
