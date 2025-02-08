'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import Link from 'next/link';
import { MenuNavLinkProps } from './types';

export const MenuNavLink: React.FC<MenuNavLinkProps> = (props) => {
  const { link, name } = props;

  return (
    <li className={cn(classes.menuLinkWrapper)} id="linkItem">
      <Link className={cn(classes.menuLink)} href={link}>
        <p className={cn(classes.linkName)}>{name}</p>
      </Link>
    </li>
  );
};
