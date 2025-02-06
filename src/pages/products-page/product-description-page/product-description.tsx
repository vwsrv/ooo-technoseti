'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { imageNotFound } from '@/shared/constants/not-found-image-link';
import { useRouter } from 'next/navigation';
import { HeaderSection } from '@/shared/ui/header-section/HeaderSection';
import { useParams } from 'next/navigation';
import { ProductCardTypeSmall } from '@/shared/ui/product-card-type-small';
import { ProductCardInfo } from '@/shared/ui/product-card-info';
import { CatalogLink } from '@/shared/ui/catalog-link';
import { CatalogNavBar } from '@/shared/ui/catalog-navbar';
import productDescription from '@/shared/constants/proructDescription';
import { DocumentLink } from '@/shared/ui/document-link';
import { SectionText } from '@/shared/ui/section-text';

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
            <ProductCardInfo
              title={product.title}
              description={product.description}
              src={product.image ? product.image : imageNotFound}
            />
          </div>
          <h3 className={cn(classes.anotherProducts)}>Другое оборудование</h3>
          <div className={cn(classes.productDescriptionContainer)}>
            {randomProducts.map((item) => (
              <ProductCardTypeSmall
                key={item.id}
                title={item.title}
                description={item.description}
                onClick={() => handleCardClick(item.id)}
              />
            ))}
          </div>
        </div>
        <div className={cn(classes.catalogNavBar)}>
          <CatalogNavBar>
            {filteredProducts.map((item) => (
              <CatalogLink
                key={item.id}
                catalogLink={item.title}
                name={item.title}
              />
            ))}
          </CatalogNavBar>
          <div className={cn(classes.catalogDownloads)}>
            <SectionText variant="orange" title="Полезные материалы:" />
            <DocumentLink variant="doc" title="Буклет о компании .DOC" />
            <DocumentLink variant="zip" title="Скачать .ZIP" />
            <DocumentLink variant="pdf" title="Скачать .PDF" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
