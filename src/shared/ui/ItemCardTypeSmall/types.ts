import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TypeCardItemSmallProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  title: string;
  description: string;
  onClick?: () => void;
}
