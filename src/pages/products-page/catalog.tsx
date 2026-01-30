'use client';

import { FC } from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { PageHeader } from '@/shared';
import { CatalogList } from '@/features';

const Catalog: FC = () => (
  <div className={cn(classes.catalog)}>
    <PageHeader headerTitle="Продукция" />
    <CatalogList containerClassName={classes.catalogContainer} />
  </div>
);

export default Catalog;
