'use client';

import { FC, Fragment } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import cn from 'classnames';
import { typeHeaderSectionProps } from './types';
import classes from './styles.module.scss';

const routeNames = {
  '': 'Главная',
  catalog: 'Продукция',
  objects: 'Объекты',
  news: 'Новости и статьи',
  contacts: 'Контакты',
};

export const HeaderSection: FC<typeHeaderSectionProps> = ({
  startElement = 'Главная',
  separator = '>',
  headerTitle,
}) => {
  const pathname = usePathname();
  const pathnames = pathname?.split('/').filter((x) => x) || [];

  type RouteNames = keyof typeof routeNames;
  const formatPathname = (pathname: RouteNames | string) =>
    routeNames[pathname as RouteNames] || pathname;

  return (
    <header className={classes.headerSection}>
      <div className={classes.titleHolder}>
        <h2>{headerTitle}</h2>
      </div>
      <div className={classes.headerContainer}>
        <Link href="/">
          <span className={classes.headerSectionItem}>{startElement}</span>
        </Link>
        {pathnames.map((pathname, index) => {
          const isLast = index === pathnames.length - 1;
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <Fragment key={pathname}>
              <span className={classes.headerSectionSeparator}>
                {separator}
              </span>
              {isLast ? (
                <span
                  className={cn(classes.headerSectionItem, {
                    [classes.headerSectionItemActive]: isLast,
                  })}
                >
                  {formatPathname(pathname)}
                </span>
              ) : (
                <Link href={routeTo}>
                  <span
                    className={cn(classes.headerSectionItem, {
                      [classes.headerSectionItemActive]: isLast,
                    })}
                  >
                    {formatPathname(pathname)}
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
