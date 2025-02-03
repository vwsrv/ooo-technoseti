'use client';

import React from 'react';
import Image from 'next/image';
import classes from './styles.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { TypeCardItemProps } from './types';
import { Button } from '../Button';
import { imageNotFound } from './constants/constants';

export const CardItem: React.FC<TypeCardItemProps> = (props) => {
  const { dataList, className, onClick, ...otherProps } = props;

  return (
    <>
      {dataList.map((item, index) => (
        <article
          key={index}
          className={cn(classes.cardItem, className)}
          {...otherProps}
        >
          <div className={cn(classes.cardContainer)}>
            <div className={cn(classes.imageContainer)}>
              <Image
                className={cn(classes.cardImage)}
                src={item.link ? item.link : imageNotFound}
                alt={item.title}
                fill={true}
              />
            </div>
            <div className={cn(classes.cardInfo)}>
              <h3 className={cn(classes.cardTitle)}>{item.title}</h3>
              <p className={cn(classes.cardDescription)}>{item.description}</p>
            </div>
            <Button disabled={false} variant="pink">
              Читать далее
            </Button>
          </div>
        </article>
      ))}
    </>
  );
};
