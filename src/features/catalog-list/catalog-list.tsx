'use client';

import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ProductCard } from '@/shared';
import { fetchProducts } from '@/app/api';
import cn from 'classnames';
import type { ProductItem } from '@/shared/constants/products';

type CatalogListProps = {
  containerClassName?: string;
};

export const CatalogList: FC<CatalogListProps> = ({ containerClassName }) => {
  const router = useRouter();
  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const handleCardClick = (id: number) => {
    if (id) {
      router.push(`/catalog/${id}`);
    } else {
      console.error('ID товара не указан');
    }
  };

  return (
    <div className={cn(containerClassName)}>
      {products.map((item, index) => (
        <ProductCard
          key={item.id ?? index}
          src={item.imageSrc}
          title={item.title}
          description={item.description}
          onClick={() => handleCardClick(item.id)}
        />
      ))}
    </div>
  );
};
