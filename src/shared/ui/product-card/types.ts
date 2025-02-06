import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { StaticImageData } from 'next/image';

export interface typeProductCardProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  id?: string;
  src: string | StaticImageData;
  title: string;
  description: string;
  onClick?: () => void;
}
