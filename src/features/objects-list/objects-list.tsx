'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { ProductCard, portfolioDataList } from '@/shared';
import cn from 'classnames';

type ObjectsListProps = {
  containerClassName?: string;
};

export const ObjectsList: FC<ObjectsListProps> = ({ containerClassName }) => {
  const router = useRouter();

  const handleCardClick = (id: number) => {
    if (id) {
      router.push(`/objects/${id}`);
    } else {
      console.error('ID товара не указан');
    }
  };

  return (
    <div className={cn(containerClassName)}>
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
  );
};
