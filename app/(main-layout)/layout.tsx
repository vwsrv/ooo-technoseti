import React from 'react';
import { Navigation } from '@/features/navigation';
import { Footer } from '@/shared/ui/Footer';
import classes from './styles.module.scss';
import cn from 'classnames';

const MainLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={classes.mainLayout}>
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
