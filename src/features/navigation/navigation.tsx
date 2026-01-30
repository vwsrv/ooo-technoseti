'use client';

import { FC } from 'react';
import { MenuNavList, CompanyLogo, menuNavData } from '@/shared';
import styles from './index.module.scss';

export const Navigation: FC = () => {
  return (
    <header className={styles.menuBar}>
      <CompanyLogo />
      <MenuNavList navLinks={menuNavData} />
      <div className={styles.menuBarLine}></div>
    </header>
  );
};
