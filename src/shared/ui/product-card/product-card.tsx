'use client';

import { FC } from 'react';
import Image from 'next/image';
import classes from './styles.module.scss';
import cn from 'classnames';
import { typeProductCardProps } from './types';
import { Button } from '@/shared/ui/button/button';
import { imageNotFound } from '@/shared';

export const ProductCard: FC<typeProductCardProps> = ({
  src,
  title,
  description,
  onClick,
}) => (
  <article className={cn(classes.cardItem)}>
    <div className={cn(classes.cardContainer)}>
      <div className={cn(classes.imageContainer)}>
        <Image
          className={cn(classes.cardImage)}
          src={src ? src : imageNotFound}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 560px"
        />
      </div>
      <div className={cn(classes.cardInfo)}>
        <h3 className={cn(classes.cardTitle)}>{title}</h3>
        <p className={cn(classes.cardDescription)}>{description}</p>
      </div>
      <Button
        disabled={false}
        variant="pink"
        className={classes.cardButton}
        onClick={onClick}
      >
        Читать далее
      </Button>
    </div>
  </article>
);
