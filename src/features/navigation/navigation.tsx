'use client';

import React from 'react';
import { MenuNav } from '@/shared/ui/menu-navigation-list';
import styles from './index.module.scss';
import { CompanyLogo } from '@/shared/ui/company-logo/companyLogo';

export const Navigation: React.FC = () => {
  const menuNavData = [
    { link: '/', name: 'Главная' },
    { link: '/catalog', name: 'Продукция' },
    { link: '/objects', name: 'Объекты' },
    { link: '/news', name: 'Новости и статьи' },
    { link: '/contacts', name: 'Контакты' },
  ];

  return (
    <div className={styles.menuBar}>
      <CompanyLogo />
      <MenuNav navLinks={menuNavData} />
      <div className={styles.menuBarLine}></div>
    </div>
  );
};
