'use client';

import { FC } from 'react';
import cn from 'classnames';
import { ObjectDescription } from '@/features';
import classes from '../styles.module.scss';

export const ObjectDescriptionPage: FC = () => (
  <div className={cn(classes.portfolio)}>
    <ObjectDescription />
  </div>
);

export default ObjectDescriptionPage;
