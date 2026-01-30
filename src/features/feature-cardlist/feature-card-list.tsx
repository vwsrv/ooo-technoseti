'use client';

import { FC } from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeFeatureCardProps } from './types';
import { FeatureCard } from '@/shared';

export const FeatureCardList: FC<typeFeatureCardProps> = ({ techCardList }) => (
  <div className={cn(classes.techCardList)}>
    <ul className={cn(classes.techCardListContainer)}>
      {techCardList.map((cardItemData, index) => (
        <li key={index}>
          <FeatureCard cardItemData={cardItemData} />
        </li>
      ))}
    </ul>
  </div>
);
