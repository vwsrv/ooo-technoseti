import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { StaticImageData } from 'next/image';

export interface cardItemData {
  name: string;
  description: string;
  src?: StaticImageData;
}

export interface TechCardProps extends cardItemData {
  cardItem?: cardItemData[];
}

export interface typeFeatureCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  techCardList: cardItemData[];
}
