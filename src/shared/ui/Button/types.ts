import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface TypeButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'blue' | 'white' | 'pink';
}
