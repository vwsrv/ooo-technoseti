import { HTMLAttributes, DetailedHTMLProps } from "react";

export interface TypeSectionHeadingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  title: string;
  titleBold: string;
  variant?: 'blue' | 'pink';
}
