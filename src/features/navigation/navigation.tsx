'use client';

import React, { useState, useEffect } from 'react';
import { MenuNav } from '@/shared/ui/MenuNav';
import styles from './index.module.scss';
import { CompanyLogo } from '@/shared/ui/CompanyLogo/CompanyLogo';

export const Navigation: React.FC = () => {
  const menuNavData = [
    { link: '/', title: 'Главная' },
    { link: '/catalog', title: 'Продукция' },
    { link: '/portfolio', title: 'Объекты' },
    { link: '/news', title: 'Новости и статьи' },
    { link: '/contacts', title: 'Контакты' },
  ];

  return (
    <div className={styles.menuBar}>
      <CompanyLogo />
      <MenuNav navLinks={menuNavData} />
      <div className={styles.menuBarLine}></div>
    </div>
  );
};
