export interface PortfolioImageItem {
  id: number;
  image: string;
}

export interface PortfolioInfoItem {
  infoTitle: string;
  infoDescription: string;
}

export interface PortfolioItem {
  id: number;
  src: PortfolioImageItem[];
  title: string;
  description: string;
  info?: PortfolioInfoItem[];
  productInfo?: PortfolioInfoItem[];
}
