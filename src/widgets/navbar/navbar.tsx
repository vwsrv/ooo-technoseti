import { FC } from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeCatalogNavBarProps } from './types';

export const Navbar: FC<typeCatalogNavBarProps> = ({ children }) => {
  return (
    <div className={cn(classes.catalogNavBar)}>
      <div className={cn(classes.catalogNavBarContainer)}>{children}</div>
    </div>
  );
};
