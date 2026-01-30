'use client';

import { FC, useState } from 'react';
import {
  Header,
  menuNavData,
  MenuNavLink,
  useMediaQuery,
  imageLogoWidthWhite,
} from '@/shared';
import cn from 'classnames';
import classes from './styles.module.scss';

const HeaderNavigation: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isMobile = useMediaQuery('(max-width: 1040px)');

  return (
    isMobile && (
      <>
        <Header headerAlt="Logo" headerLogo={imageLogoWidthWhite}>
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
