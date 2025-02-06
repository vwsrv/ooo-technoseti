'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeArrowProps } from './types';

export const Arrow: React.FC<typeArrowProps> = (props) => {
  const { disabled, variant } = props;

  return (
    <button
      disabled={disabled}
      className={cn(classes.arrow, classes[variant])}
    />
  );
};
