'use client';

import { FC, useState, useEffect } from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import {
  imageNotFound,
  SectionHeader,
  PageHeader,
  ProductCardTypeSmall,
  InfoCard,
  CatalogLink,
  DocumentLink,
} from '@/shared';
import { fetchProducts } from '@/app/api';
import { useProductDescriptionData } from '@/features';
import { useRouter, useParams, notFound } from 'next/navigation';
import type { ProductItem } from '@/shared/constants/products';

const ProductDescription: FC = () => {
  const params = useParams();
  const router = useRouter();
  const id = params?.id ? Number(params.id) : null;
  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const { product, catalogProducts, relatedProducts } =
    useProductDescriptionData(products, id);

  const isInvalidId =
    id === null || Number.isNaN(id) || !Number.isInteger(id) || id < 1;
  if (isInvalidId) notFound();

  if (products.length === 0) return <div>Загрузка...</div>;
  if (!product) notFound();

  return (
    <div className={cn(classes.productDescriptionPage)}>
      <PageHeader headerTitle={product.title} />
      <div className={cn(classes.productInfoContent)}>
        <div className={cn(classes.productInfoHolder)}>
          <div className={cn(classes.productInfoContainer)}>
            <InfoCard
              title={product.title}
              description={product.fullDescription}
              src={product.image || imageNotFound}
            />
          </div>
          <h3 className={cn(classes.anotherProducts)}>Другое оборудование</h3>
          <div className={cn(classes.productDescriptionContainer)}>
            {relatedProducts.map((item) => (
              <ProductCardTypeSmall
                key={item.id}
                title={item.title}
                description={item.description}
                onClick={() => router.push(`/catalog/${item.id}`)}
              />
            ))}
          </div>
        </div>
        <div className={cn(classes.catalogNavBar)}>
          <div className={cn(classes.navBarBlock)}>
            {catalogProducts.map((item) => (
              <CatalogLink
                key={item.id}
                catalogLink={item.title}
                name={item.title}
              />
            ))}
          </div>
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
