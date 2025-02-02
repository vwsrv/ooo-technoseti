'use client';

import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { SectionText } from '@/shared/ui/SectionText';
import CompanyLogo from '../../shared/images/main-logo/for-white-bg-logo-short.svg';
import Image from 'next/image';
import { PromoImage } from '@/shared/ui/PromoImage/PromoImage';

export const AboutCompany: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        <SectionText
          variant="black"
          title="Компания"
          titleBold="Техносети"
          subtitle="На перенасыщенном рынке инженерных систем мы предоставляем наиболее надежные и современные решения для наших партнеров.
В команде специалисты с опытом более 15 лет. Мы ищем, исследуем и реализуем современные инженерные решения для систем водоснабжения, теплоснабжения, электрификации и водоотведения."
        />
        <Image
          src={CompanyLogo}
          alt="Логотип компании"
          width={96}
          height={96}
          style={{ margin: '0 0 26px 0' }}
        ></Image>
        <h3>Артем Петров</h3>
        <p className="description">Генеральный директор</p>
      </div>
      <PromoImage />
    </section>
  );
};
