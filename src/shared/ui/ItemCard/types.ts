import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { StaticImageData } from 'next/image';

export interface CardItem {
  link: string | StaticImageData;
  title: string;
  description: string;
}
export interface TypeCardItemProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  dataList: CardItem[];
}
