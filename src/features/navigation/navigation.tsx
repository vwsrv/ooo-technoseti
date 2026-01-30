'use client';

import React from 'react';
import { MenuNavList, CompanyLogo, menuNavData } from '@/shared';
import styles from './index.module.scss';

export const Navigation: React.FC = () => {
  return (
    <div className={styles.menuBar}>
      <CompanyLogo />
      <MenuNavList navLinks={menuNavData} />
      <div className={styles.menuBarLine}></div>
    </div>
  );
};
