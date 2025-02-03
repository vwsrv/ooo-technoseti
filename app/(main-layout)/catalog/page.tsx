import React from 'react';
import Catalog from '@/pages/catalog-page/catalog';
import cn from 'classnames';
import classes from './styles.module.scss';
import { HeaderSection } from '@/shared/ui/HeaderSection/HeaderSection';

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
