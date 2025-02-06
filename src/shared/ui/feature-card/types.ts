import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TechCardProps } from '../../../features/feature-cardlist/types';

export interface typeFeatureCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cardItemData: TechCardProps;
}
