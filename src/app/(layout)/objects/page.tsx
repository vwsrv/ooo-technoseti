import React from 'react';
import ObjectsPage from '@/pages/objects-page/objects-page';
import cn from 'classnames';
import classes from './styles.module.scss';

const CatalogPage: React.FC = () => {
  return (
    <main>
      <div className={cn(classes.layout)}>
        <ObjectsPage />
      </div>
    </main>
  );
};

export default CatalogPage;
