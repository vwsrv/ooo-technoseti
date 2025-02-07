'use client';

import React from 'react';
import ProductDescription from '@/pages/products-page/product-description-page/product-description';
import classes from './styles.module.scss';

const ItemDescription: React.FC = () => {
  return (
    <main>
      <div className={classes.layout}>
        <ProductDescription />
      </div>
    </main>
  );
};

export default ItemDescription;
