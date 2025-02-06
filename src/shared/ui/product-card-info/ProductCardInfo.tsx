'use client';

import React from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';
import { typeProductCardInfoProps } from './types';
import Image from 'next/image';

export const ProductCardInfo: React.FC<typeProductCardInfoProps> = (props) => {
  const { title, description, src } = props;

  return (
    <div className={cn(classes.cardInfo)}>
      <div className={cn(classes.imageContainer)}>
        <Image src={src} alt={title} fill={true} />
      </div>
      <div className={cn(classes.cardInfoContainer)}>
        <div className={cn(classes.cardInfo)}>
          <h2 className={cn(classes.cardTitle)}>{title}</h2>
          <p className={cn(classes.cardDescription)}>{description}</p>
        </div>
      </div>
    </div>
  );
};
