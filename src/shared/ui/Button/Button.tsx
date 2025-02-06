'use-client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeButtonProps } from './types';

export const Button: React.FC<typeButtonProps> = (props) => {
  const {
    variant = 'pink',
    children,
    disabled,
    className,
    ...otherProps
  } = props;

  return (
    <button
      disabled={disabled}
      className={cn(className, classes.button, classes[variant])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
