'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeFeatureCardProps } from './types';
import { FeatureCard } from '../../shared/ui/feature-card/FeatureCard';

export const FeatureCardList: React.FC<typeFeatureCardProps> = (props) => {
  const { techCardList } = props;

  return (
    <div className={cn(classes.techCardList)}>
      <ul className={cn(classes.techCardListContainer)}>
        {techCardList.map((cardItemData, index) => (
          <FeatureCard cardItemData={cardItemData} key={index} />
        ))}
      </ul>
    </div>
  );
};
