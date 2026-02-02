'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MenuNavLink,
  useMediaQuery,
  imageLogoWidthWhite,
  BP_LG,
  mediaQueryMaxWidth,
} from '@/shared';
import cn from 'classnames';
import classes from './styles.module.scss';

const HeaderNavigation: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isMobile = useMediaQuery(mediaQueryMaxWidth(BP_LG));

  return (
    isMobile && (
      <>
        <header className={classes.header}>
          <Link href="/" className={classes.logoLink} aria-label="На главную">
            <Image
              src={imageLogoWidthWhite}
              fill
              sizes="(max-width: 768px) 150px, 250px"
              style={{ objectFit: 'contain' }}
              alt="Logo"
            />
          </Link>
          <div className={classes.burgerMenu}>
            <button
              className={cn(classes.burgerIcon, { [classes.open]: isOpen })}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className={classes.burgerLine}></div>
              <div className={classes.burgerLine}></div>
              <div className={classes.burgerLine}></div>
            </button>
          </div>
        </header>
        <div
          className={cn(classes.navigationContainer, {
            [classes.open]: isOpen,
          })}
        >
          <div
            className={cn(classes.navigationList)}
            onClick={() => setIsOpen(false)}
          >
            <MenuNavLink link="/" name="Главная" />
            <MenuNavLink link="/catalog" name="Продукция" />
            <MenuNavLink link="/objects" name="Объекты" />
            <MenuNavLink link="/news" name="Новости и статьи" />
            <MenuNavLink link="/contacts" name="Контакты" />
          </div>
        </div>
      </>
    )
  );
};

export default HeaderNavigation;
