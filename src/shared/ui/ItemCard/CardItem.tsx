'use client';

import React from 'react';
import Image from 'next/image';
import classes from './styles.module.scss';
import cn from 'classnames';
import { TypeCardItemProps } from './types';
import { Button } from '../Button';
import { imageNotFound } from './constants/constants';

export const CardItem: React.FC<TypeCardItemProps> = (props) => {
  const { src, title, description, onClick } = props;

  return (
    <article className={cn(classes.cardItem)}>
      <div className={cn(classes.cardContainer)}>
        <div className={cn(classes.imageContainer)}>
          <Image
            className={cn(classes.cardImage)}
            src={src ? src : imageNotFound}
            alt={title}
            height={500}
            width={800}
          />
        </div>
        <div className={cn(classes.cardInfo)}>
          <h3 className={cn(classes.cardTitle)}>{title}</h3>
          <p className={cn(classes.cardDescription)}>{description}</p>
        </div>
        <Button disabled={false} variant="pink" onClick={onClick}>
          Читать далее
        </Button>
      </div>
    </article>
  );
};
