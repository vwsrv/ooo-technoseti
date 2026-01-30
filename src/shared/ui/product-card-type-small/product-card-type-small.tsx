'use client';

import { FC } from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';
import { typeProductCardTypeSmallProps } from './types';
import { Button } from '@/shared/ui/button/button';

export const ProductCardTypeSmall: FC<typeProductCardTypeSmallProps> = ({
  title,
  description,
  onClick,
}) => (
  <article className={cn(classes.cardInfo)}>
    <div className={cn(classes.smallCardInfoContent)}>
      <div className={cn(classes.titleHolder)}>
        <h3 className={cn(classes.cardTitle)}>{title}</h3>
        <p className={cn(classes.cardDescription)}>{description}</p>
      </div>
      <Button disabled={false} variant="pink" onClick={onClick}>
        Читать далее
      </Button>
    </div>
  </article>
);
