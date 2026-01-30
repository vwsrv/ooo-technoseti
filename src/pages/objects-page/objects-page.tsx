'use client';

import { FC } from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { SectionHeader, PageHeader, ProductCard, portfolioDataList } from '@/shared';
import { useRouter } from 'next/navigation';

const ObjectsPage: FC = () => {
  const router = useRouter();
  const handleCardClick = (id: number) => {
    if (id) {
      router.push(`/objects/${id}`);
    } else {
      console.error('ID товара не указан');
    }
  };

  return (
    <div className={cn(classes.portfolio)}>
      <PageHeader headerTitle="Объекты" />
      <div className={cn(classes.portfolioContainer)}>
        {portfolioDataList.map((item) => (
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
