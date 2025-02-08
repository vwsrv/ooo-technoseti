'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeAdvantageProps } from './types';

export const Advantage: React.FC<typeAdvantageProps> = (props) => {
  const { title, subtitle } = props;

  return (
    <div className={cn(classes.checkBox)}>
      <span className={cn(classes.icon)}></span>
      <h3 className={cn(classes.title)}>{title}</h3>
      <p className={cn(classes.subtitle)}>{subtitle}</p>
    </div>
  );
};
