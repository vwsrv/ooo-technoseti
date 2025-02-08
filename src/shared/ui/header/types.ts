import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ReactNode } from 'react';

export interface typeHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  headerLogo: string;
  children: ReactNode;
  headerAlt: string;
}
