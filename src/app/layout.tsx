import { FC, PropsWithChildren } from 'react';
import './styles/normalize.css';
import './styles/global.css';
import { montserrat, roboto } from '@/app/fonts/fonts';
import { metadata } from '@/shared';
import { Footer, SidebarNav } from '@/widgets';
import { HeaderNavigation } from '@/features';
import { PageWrapper } from './page-wrapper';
import layoutClasses from './styles/layout.module.scss';

export { metadata };

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
