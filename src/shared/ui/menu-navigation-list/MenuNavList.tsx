'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { MenuNavLink } from '../menu-nav-link/MenuNavLink';
import { menuNavigationProps } from './types';

export const MenuNavList: React.FC<menuNavigationProps> = (props) => {
  const { navLinks } = props;

  return (
    <nav className={cn(classes.menuNavigation)}>
      <ul className={classes.menuWrapper}>
        {navLinks &&
          navLinks.map((item, index) => (
            <MenuNavLink key={index} link={item.link} name={item.name} />
          ))}
      </ul>
    </nav>
  );
};
