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
import { CatalogLink } from '@/shared/ui/CatalogLink';
import { CatalogNavBar } from '@/shared/ui/catalog-navbar';
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
  const filteredProducts = productDescription.filter((item) => item.id !== id);
  const randomProducts = filteredProducts
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);

  return (
    <div className={cn(classes.productDescriptionPage)}>
      <HeaderSection headerTitle={product.title} />
      <div className={cn(classes.productInfoContent)}>
        <div className={cn(classes.productInfoHolder)}>
          <div className={cn(classes.productInfoContainer)}>
            <ItemCardInfo
              title={product.title}
              description={product.description}
              src={product.image ? product.image : imageNotFound}
            />
          </div>
          <h3 className={cn(classes.anotherProducts)}>Другое оборудование</h3>
          <div className={cn(classes.productDescriptionContainer)}>
            {randomProducts.map((item) => (
              <ItemCardTypeSmall
                key={item.id}
                title={item.title}
                description={item.description}
                onClick={() => handleCardClick(item.id)}
              />
            ))}
          </div>
        </div>
        <CatalogNavBar>
          {filteredProducts.map((item) => (
            <CatalogLink
              key={item.id}
              catalogLink={item.title}
              name={item.title}
            />
          ))}
        </CatalogNavBar>
      </div>
    </div>
  );
};

export default ProductDescription;
