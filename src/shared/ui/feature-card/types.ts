import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { StaticImageData } from 'next/image';

export interface TechCardProps {
  name: string;
  description: string;
  src?: StaticImageData;
}

export interface typeFeatureCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cardItemData: TechCardProps;
}
