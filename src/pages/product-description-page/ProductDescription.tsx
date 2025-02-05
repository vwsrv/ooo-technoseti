'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { imageNotFound } from '@/shared/ui/ItemCard/constants/constants';
import { useRouter } from 'next/navigation';
import { HeaderSection } from '@/shared/ui/HeaderSection/HeaderSection';
import { useParams } from 'next/navigation';
import { ItemCardTypeSmall } from '@/shared/ui/ItemCardTypeSmall';
import { ItemCardInfo } from '@/shared/ui/ItemCardInfo';
import productDescription from '@/shared/constants/proructDescription';

const ProductDescription: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const id = params?.id ? Number(params.id) : null;

  if (id === null) {
    return <div>Ошибка: ID товара не указан</div>;
  }

  const product = productDescription.find((item) => item.id === id);

  if (!product) {
    return <div>Товар не найден</div>;
  }

  const otherProducts = productDescription.filter((item) => item.id !== id);

  const handleCardClick = (id: number) => {
    router.push(`/catalog/${id}`);
  };

  return (
    <div className={cn(classes.productDescriptionPage)}>
      <HeaderSection headerTitle={product.title} />
      <div className={cn(classes.productInfoContent)}>
        <div className={cn(classes.productInfoContainer)}>
          <ItemCardInfo
            title={product.title}
            description={product.description}
            src={product.image ? product.image : imageNotFound}
          />
        </div>
        <h3 className={cn(classes.anotherProducts)}>Другое оборудование</h3>
        <div className={cn(classes.productDescriptionContainer)}>
          {otherProducts.map((item) => (
            <ItemCardTypeSmall
              key={item.id}
              title={item.title}
              description={item.description}
              onClick={() => handleCardClick(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
