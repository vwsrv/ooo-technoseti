import { StaticImageData } from 'next/image';

export interface typeImagePopupProps {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
  isMounted: boolean;
  imageUrl: string | StaticImageData;
}
