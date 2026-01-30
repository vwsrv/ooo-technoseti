'use client';

import { FC, useMemo } from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import {
  imageNotFound,
  HeaderSection,
  ProductCardTypeSmall,
  InfoCard,
  CatalogLink,
  CatalogNavBar,
  productDescription,
  DocumentLink,
  SectionHeader,
} from '@/shared';
import { useRouter, useParams } from 'next/navigation';

const ProductDescription: FC = () => {
  const params = useParams();
  const router = useRouter();
  const id = params?.id ? Number(params.id) : null;

  const randomProducts = useMemo(() => {
    if (id === null) return [];
    const filtered = productDescription.filter((item) => item.id !== id);
    const shuffled = [...filtered];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = (id * (i + 1)) % (i + 1);
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 2);
  }, [id]);

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

  return (
    <div className={cn(classes.productDescriptionPage)}>
      <HeaderSection headerTitle={product.title} />
      <div className={cn(classes.productInfoContent)}>
        <div className={cn(classes.productInfoHolder)}>
          <div className={cn(classes.productInfoContainer)}>
            <InfoCard
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
            <SectionHeader variant="orange" title="Полезные материалы:" />
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
