'use client';

import { FC } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import classes from './styles.module.scss';
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
        <MenuNavLink link="/" name="Главная" />
        <MenuNavLink link="/catalog" name="Продукция" />
        <MenuNavLink link="/objects" name="Объекты" />
        <MenuNavLink link="/news" name="Новости и статьи" />
        <MenuNavLink link="/contacts" name="Контакты" />
      </ul>
    </nav>
    <div className={classes.menuBarLine} />
  </header>
);
