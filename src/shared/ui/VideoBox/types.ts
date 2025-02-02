import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface TypeVideoBoxProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  onClick?: () => void;
  children: ReactNode;
}
