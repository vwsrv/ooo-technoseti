import { LiHTMLAttributes, DetailedHTMLProps } from 'react';
import { menuLinkWithChildren } from '../menu-navigation-list/types';

export interface MenuNavLinkProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLElement>, HTMLElement> {
  linkItem: menuLinkWithChildren;
}
