'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { ProductCard, HeaderSection, productsDataList } from '@/shared';
import { useRouter } from 'next/navigation';

const Catalog: React.FC = () => {
  const router = useRouter();
  const handleCardClick = (id: number) => {
    if (id) {
      router.push(`/catalog/${id}`);
    } else {
      console.error('ID товара не указан');
    }
  };

  return (
    <div className={cn(classes.catalog)}>
      <HeaderSection headerTitle="Продукция" />
      <div className={cn(classes.catalogContainer)}>
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
    </div>
  );
};

export default Catalog;
