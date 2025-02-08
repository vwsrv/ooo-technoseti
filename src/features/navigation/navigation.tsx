'use client';

import React from 'react';
import { MenuNavList } from '@/shared/ui/menu-navigation-list';
import styles from './index.module.scss';
import { CompanyLogo } from '@/shared/ui/company-logo/companyLogo';
import { menuNavData } from '../../shared/constants/menuNavigationData';

export const Navigation: React.FC = () => {
  return (
    <div className={styles.menuBar}>
      <CompanyLogo />
      <MenuNavList navLinks={menuNavData} />
      <div className={styles.menuBarLine}></div>
    </div>
  );
};
