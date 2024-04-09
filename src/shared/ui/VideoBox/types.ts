import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface TypeVideoBoxProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  onClick?: () => void;
  children: "string";
}
