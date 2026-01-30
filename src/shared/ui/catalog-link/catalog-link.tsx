import { FC } from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import Link from 'next/link';
import { typeCatalogLinkProps } from './types';

export const CatalogLink: FC<typeCatalogLinkProps> = ({
  catalogLink,
  name,
}) => {
  return (
    <div className={cn(classes.linkContainer)}>
      <Link href={catalogLink} className={cn(classes.catalogLink)}>
        {name}
      </Link>
    </div>
  );
};
