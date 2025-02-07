'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import Image from 'next/image';
import { typeFeatureCardProps } from './types';
import { ArrowRight } from '../arrow';
import techCardLogo from '../../images/main-logo/logo-short-white.svg';

export const FeatureCard: React.FC<typeFeatureCardProps> = (props) => {
  const { cardItemData } = props;

  return (
    <li className={cn(classes.techCard)}>
      <span className={cn(classes.techCardLogoHolder)}>
        {cardItemData.src ? (
          <Image
            className={cn(classes.techCardImage)}
            height={230}
            width={200}
            src={cardItemData.src}
            alt={cardItemData.name}
          />
        ) : (
          <Image
            src={techCardLogo}
            alt={cardItemData.name}
            className={cn(classes.techCardImage)}
            height={230}
            width={230}
          />
        )}
      </span>
      <div className={cn(classes.techCardContainer)}>
        <h3 className={cn(classes.techCardName)}>{cardItemData.name}</h3>
        <p className="description">{cardItemData.description}</p>
        <ArrowRight variant="default" disabled={false} />
      </div>
    </li>
  );
};
