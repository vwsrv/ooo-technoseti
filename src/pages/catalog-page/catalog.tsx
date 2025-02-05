'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { CardItem } from '@/shared/ui/ItemCard';
import { HeaderSection } from '@/shared/ui/HeaderSection/HeaderSection';
import { useRouter } from 'next/navigation';
import dataList from '@/shared/constants/productData';

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
        {dataList.map((item, index) => (
          <CardItem
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
