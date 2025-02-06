'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { HeaderSection } from '@/shared/ui/header-section/HeaderSection';
import { useRouter } from 'next/navigation';
import dataList from '../../shared/constants/portfolio';
import { ProductCard } from '@/shared/ui/product-card';

const ObjectsPage: React.FC = (props) => {
  const router = useRouter();
  const handleCardClick = (id: number) => {
    if (id) {
      router.push(`/portfolio/${id}`);
    } else {
      console.error('ID товара не указан');
    }
  };

  return (
    <div className={cn(classes.portfolio)}>
      <HeaderSection headerTitle="Объекты" />
      <div className={cn(classes.portfolioContainer)}>
        {dataList.map((item) => (
          <ProductCard
            key={item.id}
            src={item.src[0].image}
            title={item.title}
            description={item.description}
            onClick={() => handleCardClick(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ObjectsPage;
