'use client';

import { FC } from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import Image from 'next/image';
import { typeFeatureCardProps } from './types';
import techCardLogo from '../../images/main-logo/logo-short-white.svg';
import { ArrowButton } from '@/shared';

export const FeatureCard: FC<typeFeatureCardProps> = ({ cardItemData }) => {
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
        <ArrowButton variant="default" disabled={false} />
      </div>
    </li>
  );
};
