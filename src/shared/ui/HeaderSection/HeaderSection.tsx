'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import cn from 'classnames';
import { typeHeaderSectionProps } from './types';
import classes from './styles.module.scss'; // Импортируем стили

export const HeaderSection: React.FC<typeHeaderSectionProps> = (props) => {
  const pathname = usePathname();
  const pathnames = pathname?.split('/').filter((x) => x) || [];
  const {
    startElement = 'Главная',
    separator = '→',
    formatPathname = (pathname) => pathname,
    headerTitle,
  } = props;

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
            <React.Fragment key={pathname}>
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
            </React.Fragment>
          );
        })}
      </div>
    </header>
  );
};
