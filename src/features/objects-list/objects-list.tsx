'use client';

import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ProductCard, imageNotFound } from '@/shared';
import { fetchPortfolio } from '@/app/api';
import cn from 'classnames';
import type { PortfolioItem } from '@/shared/constants/portfolio';

type ObjectsListProps = {
  containerClassName?: string;
};

const getFirstImage = (item: PortfolioItem): string =>
  item.src.find((s) => s.image)?.image ?? imageNotFound;

export const ObjectsList: FC<ObjectsListProps> = ({ containerClassName }) => {
  const router = useRouter();
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    fetchPortfolio().then(setPortfolio);
  }, []);

  const handleCardClick = (id: number) => {
    if (id) {
      router.push(`/objects/${id}`);
    } else {
      console.error('ID товара не указан');
    }
  };

  return (
    <div className={cn(containerClassName)}>
      {portfolio.map((item) => (
        <ProductCard
          key={item.id}
          src={getFirstImage(item)}
          title={item.title}
          description={item.description}
          onClick={() => handleCardClick(item.id)}
        />
      ))}
    </div>
  );
};
