import type { PortfolioItem } from '@/shared/constants/portfolio';
import type { ProductItem } from '@/shared/constants/products';

export interface ProductsAllResponse {
  products: ProductItem[];
}

export interface ProductsVersionResponse {
  version: string;
}

export interface PortfolioAllResponse {
  portfolio: PortfolioItem[];
}

export interface PortfolioVersionResponse {
  version: string;
}
