import { FC, PropsWithChildren } from 'react';
import { Footer } from '@/widgets';
import { Navigation, HeaderNavigation } from '@/features';
import classes from './styles.module.scss';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <HeaderNavigation />
      <Navigation />
      <div className={classes.mainLayoutWrapper}>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
