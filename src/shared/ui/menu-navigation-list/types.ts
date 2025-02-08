import { HTMLAttributes, DetailedHTMLProps } from 'react';
import { MenuNavLinkProps } from '../menu-nav-link/types';

export interface menuNavigationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  navLinks: MenuNavLinkProps[];
}
