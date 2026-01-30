import { FC, PropsWithChildren } from 'react';
import { Footer } from '@/shared';
import { Navigation, HeaderNavigation } from '@/features';
import classes from './styles.module.scss';
import cn from 'classnames';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
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
