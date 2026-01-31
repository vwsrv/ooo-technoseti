'use client';

import { FC } from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';
import { typeProductCardInfoProps } from './types';
import Image from 'next/image';
import { imageNotFound } from '@/shared';

export const InfoCard: FC<typeProductCardInfoProps> = ({
  title,
  description,
  src,
}) => (
  <div className={cn(classes.cardInfo)}>
    <div className={cn(classes.imageContainer)}>
      <Image src={src || imageNotFound} alt={title} fill sizes="100vw" />
    </div>
    <div className={cn(classes.cardInfoContainer)}>
      <div className={cn(classes.cardInfo)}>
        <h2 className={cn(classes.cardTitle)}>{title}</h2>
        <p className={cn(classes.cardDescription)}>{description}</p>
      </div>
    </div>
  </div>
);
