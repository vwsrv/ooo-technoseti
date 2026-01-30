import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TechCardProps } from '@/features';

export interface typeFeatureCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cardItemData: TechCardProps;
}
