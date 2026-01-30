'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeSectionTextProps } from './types';

export const SectionText: React.FC<typeSectionTextProps> = (props) => {
  const { variant = 'pink', title, titleBold, className, subtitle } = props;

  return (
    <div className={cn(classes.titleContainer)}>
      <h1 className={cn(className, classes.title, classes[variant])}>
        {title}
        <span>
          <h1 className={cn(className, classes.titleBold, classes[variant])}>
            {titleBold}
          </h1>
        </span>
      </h1>
      {subtitle && (
        <p className={cn(className, classes.subtitle, classes[variant])}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
