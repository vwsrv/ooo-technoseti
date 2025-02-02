import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface TypeSectionTextProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  title: string;
  titleBold: string;
  subtitle?: string;
  variant?: 'blue' | 'pink' | 'black';
}
