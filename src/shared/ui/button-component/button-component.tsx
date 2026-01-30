'use-client';

import { FC } from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeButtonProps } from './types';

export const ButtonComponent: FC<typeButtonProps> = ({
  variant = 'pink',
  children,
  disabled,
  className,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={cn(className, classes.button, classes[variant])}
      {...props}
    >
      {children}
    </button>
  );
};
