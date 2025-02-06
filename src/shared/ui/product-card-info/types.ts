import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { StaticImageData } from 'next/image';

export interface typeProductCardInfoProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  title: string;
  description: string;
  src: string | StaticImageData;
}
