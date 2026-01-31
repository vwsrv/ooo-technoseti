import type { ProductItem } from '@/shared/constants/products';

export const getProductById = (
  products: ProductItem[],
  id: number | null
): ProductItem | null =>
  id === null ? null : (products.find((item) => item.id === id) ?? null);

export const getCatalogProducts = (
  products: ProductItem[],
  currentId: number | null
): ProductItem[] =>
  currentId === null
    ? products
    : products.filter((item) => item.id !== currentId);

export const getRelatedProducts = (
  products: ProductItem[],
  currentId: number,
  limit: number
): ProductItem[] => {
  const withoutCurrent = products.filter((item) => item.id !== currentId);
  const n = withoutCurrent.length;
  if (n === 0 || limit <= 0) return [];
  const first = withoutCurrent[currentId % n];
  const second = withoutCurrent[(currentId + 1) % n];
  return first === second ? [first] : [first, second].slice(0, limit);
};
