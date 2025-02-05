'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import ProductDescription from '@/pages/product-description-page/ProductDescription';
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
