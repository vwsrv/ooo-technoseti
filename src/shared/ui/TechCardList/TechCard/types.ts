import { DetailedHTMLProps, HTMLAttributes } from "react";
import { TechCardProps } from "../types";

export interface TypeTechCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cardItemData: TechCardProps;
}
