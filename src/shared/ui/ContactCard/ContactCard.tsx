'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeContactCardProps } from './types';
import Image from 'next/image';
import { imageNotFound } from '../ItemCard/constants/constants';

export const ContactCard: React.FC<typeContactCardProps> = (props) => {
  const { src, title, address, tel, email } = props;

  return (
    <div className={cn(classes.cardContent)}>
      <Image
        src={src ? src : imageNotFound}
        alt={title}
        className={cn(classes.cardImage)}
        width={370}
        height={220}
      />
      <div className={cn(classes.titleContainer)}>
        <h3 className={cn(classes.cardTitle)}>{title}</h3>
        <span className={cn(classes.cardIcon)}></span>
      </div>
      <ul className={cn(classes.contactInfo)}>
        <li className={cn(classes.contactAddress)}>{address}</li>
        <li className={cn(classes.contactTel)}>{tel}</li>
        {email && <li className={cn(classes.contactEmail)}>{email}</li>}
      </ul>
    </div>
  );
};
