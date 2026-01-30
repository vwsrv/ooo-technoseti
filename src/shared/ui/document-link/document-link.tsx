'use-client';

import { FC } from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { typeDocumentLinkProps } from './types';

export const DocumentLink: FC<typeDocumentLinkProps> = ({
  variant = 'pink',
  title,
}) => {
  return (
    <div className={cn(classes.documentLink, classes[variant])}>
      <div className={cn(classes.titleContainer, classes[variant])}>
        <span className={cn(classes.documentIcon, classes[variant])} />
        <p className={classes.documentTitle}>{title}</p>
      </div>
    </div>
  );
};
