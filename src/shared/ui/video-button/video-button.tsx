'use client';

import { FC } from 'react';
import { typeVideoBoxProps } from './types';
import cn from 'classnames';
import classes from './styles.module.scss';

export const VideoButton: FC<typeVideoBoxProps> = ({
  onClick,
  children,
  disabled,
}) => (
  <button
    disabled={disabled}
    className={cn(classes.videobox)}
    onClick={onClick}
  >
    <span />
    <p className="description">{children}</p>
  </button>
);
