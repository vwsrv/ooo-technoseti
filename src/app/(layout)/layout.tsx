import React from 'react';
import { Navigation } from '@/features/navigation';
import { Footer } from '@/shared/ui/footer-component';
import classes from './styles.module.scss';
import cn from 'classnames';
import HeaderNavigation from '@/features/header-navigation/header-navigation';

const MainLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={classes.mainLayout}>
      <HeaderNavigation />
      <Navigation />
      <div className={cn(classes.mainLayoutWrapper)}>
        {children}
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
