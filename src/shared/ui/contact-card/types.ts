import { StaticImageData } from 'next/image';

export interface typeContactCardProps {
  src: string | StaticImageData;
  title: string;
  address: string;
  tel: string;
  email?: string;
}
