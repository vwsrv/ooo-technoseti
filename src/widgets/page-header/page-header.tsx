'use client';

import { FC, Fragment } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import cn from 'classnames';
import { typePageHeaderProps } from './types';
import classes from './styles.module.scss';

const routeNames: Record<string, string> = {
  '': 'Главная',
  catalog: 'Продукция',
  objects: 'Объекты',
  news: 'Новости и статьи',
  contacts: 'Контакты',
};

export const PageHeader: FC<typePageHeaderProps> = ({
  startElement = 'Главная',
  separator = '>',
  headerTitle,
}) => {
  const pathname = usePathname();
  const pathnames = pathname?.split('/').filter((x) => x) || [];

  const formatPathname = (segment: string) =>
    routeNames[segment] ?? segment;

  return (
    <header className={classes.pageHeader}>
      <div className={classes.titleHolder}>
        <h2>{headerTitle}</h2>
      </div>
      <div className={classes.headerContainer}>
        <Link href="/">
          <span className={classes.headerSectionItem}>{startElement}</span>
        </Link>
        {pathnames.map((segment, index) => {
          const isLast = index === pathnames.length - 1;
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <Fragment key={segment}>
              <span className={classes.headerSectionSeparator}>
                {separator}
              </span>
              {isLast ? (
                <span
                  className={cn(classes.headerSectionItem, {
                    [classes.headerSectionItemActive]: isLast,
                  })}
                >
                  {formatPathname(segment)}
                </span>
              ) : (
                <Link href={routeTo}>
                  <span
                    className={cn(classes.headerSectionItem, {
                      [classes.headerSectionItemActive]: isLast,
                    })}
                  >
                    {formatPathname(segment)}
                  </span>
                </Link>
              )}
            </Fragment>
          );
        })}
      </div>
    </header>
  );
};
