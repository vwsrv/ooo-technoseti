'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import Image from 'next/image';
import { typeHeaderProps } from './types';

export const Header: React.FC<typeHeaderProps> = (props) => {
  const { headerLogo, children, headerAlt, style } = props;

  return (
    <header className={cn(classes.header)} style={{ ...style }}>
      <div className={cn(classes.imageContainer)}>
        <Image
          src={headerLogo}
          fill={true}
          objectFit="contain"
          alt={headerAlt}
        />
      </div>
      {children}
    </header>
  );
};
