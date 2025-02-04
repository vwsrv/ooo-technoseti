'use client';

import React, { useState, useEffect } from 'react';
import { MenuNav } from '@/shared/ui/MenuNav';
import styles from './index.module.scss';
import { CompanyLogo } from '@/shared/ui/CompanyLogo/CompanyLogo';

export const Navigation: React.FC = () => {
  const menuNavData = [
    { link: '/', name: 'Главная' },
    { link: '/catalog', name: 'Продукция' },
    { link: '/portfolio', name: 'Объекты' },
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
