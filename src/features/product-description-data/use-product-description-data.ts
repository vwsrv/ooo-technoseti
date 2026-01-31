import { useMemo } from 'react';
import type { ProductItem } from '@/shared/constants/products';
import { getProductById, getCatalogProducts, getRelatedProducts } from './lib';

const RELATED_LIMIT = 2;

export const useProductDescriptionData = (
  products: ProductItem[],
  productId: number | null
) => {
  const product = useMemo(
    () => getProductById(products, productId),
    [products, productId]
  );
  const catalogProducts = useMemo(
    () => getCatalogProducts(products, productId),
    [products, productId]
  );
  const relatedProducts = useMemo(() => {
    if (productId === null || !product) return [];
    return getRelatedProducts(products, productId, RELATED_LIMIT);
  }, [products, productId, product]);

  return { product, catalogProducts, relatedProducts };
};
