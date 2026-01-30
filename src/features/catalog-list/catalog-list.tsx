'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { ProductCard, productsDataList } from '@/shared';
import cn from 'classnames';

type CatalogListProps = {
  containerClassName?: string;
};

export const CatalogList: FC<CatalogListProps> = ({ containerClassName }) => {
  const router = useRouter();

  const handleCardClick = (id: number) => {
    if (id) {
      router.push(`/catalog/${id}`);
    } else {
      console.error('ID товара не указан');
    }
  };

  return (
    <div className={cn(containerClassName)}>
      {productsDataList.map((item, index) => (
        <ProductCard
          key={index}
          src={item.src}
          title={item.title}
          description={item.description}
          onClick={() => handleCardClick(item.id)}
        />
      ))}
    </div>
  );
};
