'use client';

import React from 'react';
import cn from 'classnames';
import classes from './index.module.scss';
import Image from 'next/image';
import ImageLink from '../../images/main-logo/logo-width-white.svg';

export const CompanyLogo: React.FC = () => {
  return (
    <div className={cn(classes.logoContainer)}>
      <Image
        src={ImageLink}
        className={classes.image}
        alt="Логотип организации"
      />
      <div className={classes.logoLine}></div>
    </div>
  );
};
