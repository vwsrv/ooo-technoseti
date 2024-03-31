"use client";

import React from "react";
import cn from "classnames";
import classes from "./styles.module.scss";
import { MenuNavLink } from "./MenuNavLink/MenuNavLink";
import { menuNavigationProps } from "./types";

export const MenuNav: React.FC<menuNavigationProps> = (props) => {
  const { navLinks } = props;

  return (
    <nav className={cn(classes.menuNavigation)}>
      <ul className={classes.menuWrapper}>
        {navLinks &&
          navLinks.map((link, index) => (
            <MenuNavLink key={index} linkItem={link} />
          ))}
      </ul>
    </nav>
  );
};
