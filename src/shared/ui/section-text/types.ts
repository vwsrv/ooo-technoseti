import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface typeSectionTextProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  title?: string;
  titleBold?: string;
  subtitle?: string;
  variant?: 'blue' | 'pink' | 'black' | 'orange';
}
