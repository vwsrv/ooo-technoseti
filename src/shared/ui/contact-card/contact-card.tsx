'use client';

import { FC } from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeContactCardProps } from './types';
import Image from 'next/image';
import { imageNotFound } from '../../constants/not-found-image-link';

export const ContactCard: FC<typeContactCardProps> = ({
  src,
  title,
  address,
  tel,
  email,
}) => {
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
        {tel && (
          <li className={cn(classes.contactTel)}>
            <a
              href={`tel:+${tel.replace(/\D/g, '').replace(/^8/, '7')}`}
              className={classes.contactLink}
            >
              {tel}
            </a>
          </li>
        )}
        {email && (
          <li className={cn(classes.contactEmail)}>
            <a href={`mailto:${email}`} className={classes.contactLink}>
              {email}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};
