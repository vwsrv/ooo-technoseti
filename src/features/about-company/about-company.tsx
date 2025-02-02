'use client';

import React from 'react';
import styles from './styles.module.scss';
import { SectionText } from '@/shared/ui/SectionText';
import CompanyLogo from '../../shared/images/main-logo/for-white-bg-logo-short.svg';
import Image from 'next/image';
import { ImageWithEffects } from '@/shared/ui/ImageWithEffects/ImageWithEffects';

export const AboutCompany: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        <SectionText
          variant="black"
          title="Компания"
          titleBold="ТЕХНОСЕТИ"
          subtitle="На перенасыщенном рынке инженерных систем мы предоставляем наиболее надежные и современные решения для наших партнеров.
В команде специалисты с опытом более 15 лет. Мы ищем, исследуем и реализуем современные инженерные решения для систем водоснабжения, теплоснабжения, электрификации и водоотведения."
        />
        <Image
          src={CompanyLogo}
          alt="Логотип компании"
          width={96}
          height={96}
          style={{ margin: '0' }}
        ></Image>
        <h3>Артем Петров</h3>
        <p className="description">Генеральный директор</p>
      </div>
      <ImageWithEffects />
    </section>
  );
};
