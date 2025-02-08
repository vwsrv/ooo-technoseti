import { LiHTMLAttributes, DetailedHTMLProps } from 'react';

export interface MenuNavLinkProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLElement>, HTMLElement> {
  link: string;
  name: string;
}
