'use client';

import { FC } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import classes from './styles.module.scss';
import { MENU_NAV_DATA } from './constants';
import { MenuNavLink, imageLogoWidthWhite } from '@/shared';

export const SidebarNav: FC = () => (
  <header className={classes.menuBar}>
    <div className={cn(classes.logoContainer)}>
      <Image
        src={imageLogoWidthWhite}
        className={classes.logoImage}
        alt="Логотип организации"
      />
      <div className={classes.logoLine} />
    </div>
    <nav className={cn(classes.menuNavigation)}>
      <ul className={classes.menuWrapper}>
        {MENU_NAV_DATA.map((item, index) => (
          <MenuNavLink key={index} link={item.link} name={item.name} />
        ))}
      </ul>
    </nav>
    <div className={classes.menuBarLine} />
  </header>
);
