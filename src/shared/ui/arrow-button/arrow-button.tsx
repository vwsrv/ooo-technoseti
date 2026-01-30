'use client';

import { FC } from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeArrowProps } from './types';

export const ArrowButton: FC<typeArrowProps> = ({ disabled, variant }) => {
  return (
    <button
      disabled={disabled}
      className={cn(classes.arrow, classes[variant])}
    />
  );
};
