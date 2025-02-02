import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardItem {
  link: string;
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
