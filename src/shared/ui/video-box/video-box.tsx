'use client';

import React from 'react';
import { typeVideoBoxProps } from './types';
import cn from 'classnames';
import classes from './styles.module.scss';

export const VideoBox: React.FC<typeVideoBoxProps> = (props) => {
  const { onClick, children, disabled } = props;

  return (
    <button
      disabled={disabled}
      className={cn(classes.videobox)}
      onClick={onClick}
    >
      <span />
      <p className="description">{children}</p>
    </button>
  );
};
