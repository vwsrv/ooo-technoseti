'use client';

import React, { useState } from 'react';
import { Header } from '@/shared/ui/header';
import cn from 'classnames';
import classes from './styles.module.scss';
import companyLogo from '../../shared/images/main-logo/logo-width-white.svg';
import { menuNavData } from '@/shared/constants/menuNavigationData';
import { MenuNavLink } from '@/shared/ui/menu-nav-link/MenuNavLink';
import { useMediaQuery } from '@/shared/lib/useMediaQuery';

const HeaderNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isMobile = useMediaQuery('(max-width: 1040px)');

  return (
    isMobile && (
      <>
        <Header headerAlt="Logo" headerLogo={companyLogo}>
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
        </Header>
        <div
          className={cn(classes.navigationContainer, {
            [classes.open]: isOpen,
          })}
        >
          <div
            className={cn(classes.navigationList)}
            onClick={() => setIsOpen(false)}
          >
            {menuNavData.map((item, index) => (
              <MenuNavLink key={index} link={item.link} name={item.name} />
            ))}
          </div>
        </div>
      </>
    )
  );
};

export default HeaderNavigation;
