import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeCatalogNavBarProps } from './types';

export const CatalogNavBar: React.FC<typeCatalogNavBarProps> = (props) => {
  const { children } = props;

  return (
    <div className={cn(classes.catalogNavBar)}>
      <div className={cn(classes.catalogNavBarContainer)}>{children}</div>
    </div>
  );
};
