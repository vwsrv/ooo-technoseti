'use client';

import React from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';
import { typeProductCardTypeSmallProps } from './types';
import { ButtonComponent } from '../button-component/buttonComponent';

export const ProductCardTypeSmall: React.FC<typeProductCardTypeSmallProps> = (
  props
) => {
  const { title, description, onClick } = props;

  return (
    <article className={cn(classes.cardInfo)}>
      <div className={cn(classes.smallCardInfoContent)}>
        <div className={cn(classes.titleHolder)}>
          <h3 className={cn(classes.cardTitle)}>{title}</h3>
          <p className={cn(classes.cardDescription)}>{description}</p>
        </div>
        <ButtonComponent disabled={false} variant="pink" onClick={onClick}>
          Читать далее
        </ButtonComponent>
      </div>
    </article>
  );
};
