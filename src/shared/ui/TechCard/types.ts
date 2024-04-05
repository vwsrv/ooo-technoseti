import { DetailedHTMLProps, HTMLAttributes } from "react";
import { StaticImageData } from "next/image";

export interface TypeTechCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  description: string;
  imageUrl: StaticImageData;
}
