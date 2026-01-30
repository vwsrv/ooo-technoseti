import { FC } from 'react';
import Catalog from '@/pages/products-page/catalog';
import cn from 'classnames';
import classes from './styles.module.scss';

const CatalogPage: FC = () => {
  return (
    <main>
      <div className={cn(classes.layout)}>
        <Catalog />
      </div>
    </main>
  );
};

export default CatalogPage;
