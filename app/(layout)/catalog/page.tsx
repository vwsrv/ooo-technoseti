import React from 'react';
import Catalog from '@/pages/products-page/catalog';
import cn from 'classnames';
import classes from './styles.module.scss';

const CatalogPage: React.FC = () => {
  return (
    <main>
      <div className={cn(classes.layout)}>
        <Catalog />
      </div>
    </main>
  );
};

export default CatalogPage;
