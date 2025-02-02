import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface MenuNavLink {
  title: string;
  link: string;
}

export interface menuLinkWithChildren extends MenuNavLink {
  children?: MenuNavLink[];
}

export interface menuNavigationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  navLinks: MenuNavLink[];
}
