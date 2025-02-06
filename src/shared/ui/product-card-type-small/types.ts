import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface typeProductCardTypeSmallProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  title: string;
  description: string;
  onClick?: () => void;
}
