import { LiHTMLAttributes, DetailedHTMLProps } from 'react';
import { menuLinkWithChildren } from '../types';

export interface MenuNavLinkProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLElement>, HTMLElement> {
  linkItem: menuLinkWithChildren;
}
