import type { ProductItem } from '@/shared/constants/products';
import type { PortfolioItem } from '@/shared/constants/portfolio';

const PRODUCTS_URL = '/api/fake/products/all';
const PORTFOLIO_URL = '/api/fake/portfolio/all';

export const fetchProducts = (): Promise<ProductItem[]> =>
  fetch(PRODUCTS_URL)
    .then((res) => res.json())
    .then((data: { products: ProductItem[] }) => data.products);

export const fetchPortfolio = (): Promise<PortfolioItem[]> =>
  fetch(PORTFOLIO_URL)
    .then((res) => res.json())
    .then((data: { portfolio: PortfolioItem[] }) => data.portfolio);
