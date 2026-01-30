import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface typeVideoBoxProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  onClick?: () => void;
  children: ReactNode;
}
