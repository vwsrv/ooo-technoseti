'use client';

import { FC } from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { PageHeader } from '@/shared';
import { ObjectsList } from '@/features';

const ObjectsPage: FC = () => (
  <div className={cn(classes.portfolio)}>
    <PageHeader headerTitle="Объекты" />
    <ObjectsList containerClassName={classes.portfolioContainer} />
  </div>
);

export default ObjectsPage;
