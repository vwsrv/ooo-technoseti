'use client';

import { FC } from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { MenuNavLink } from '../menu-nav-link/menu-nav-link';
import { menuNavigationProps } from './types';

export const MenuNavList: FC<menuNavigationProps> = ({ navLinks }) => (
  <nav className={cn(classes.menuNavigation)}>
    <ul className={classes.menuWrapper}>
      {navLinks &&
        navLinks.map((item, index) => (
          <MenuNavLink key={index} link={item.link} name={item.name} />
        ))}
    </ul>
  </nav>
);
