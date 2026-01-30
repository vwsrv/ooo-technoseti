'use client';

import { FC } from 'react';
import ProductDescription from '@/pages/products-page/product-description-page/product-description';
import classes from './styles.module.scss';

const ItemDescription: FC = () => {
  return (
    <main>
      <div className={classes.layout}>
        <ProductDescription />
      </div>
    </main>
  );
};

export default ItemDescription;
