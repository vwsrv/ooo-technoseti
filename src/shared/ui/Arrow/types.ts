import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface TypeArrowProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  onClick?: () => void;
}
