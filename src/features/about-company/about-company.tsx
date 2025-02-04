'use client';

import React from 'react';
import classes from './styles.module.scss';
import { SectionText } from '@/shared/ui/SectionText';
import CompanyLogo from '../../shared/images/main-logo/for-white-bg-logo-short.svg';
import Image from 'next/image';
import { ImageWithEffects } from '@/shared/ui/ImageWithEffects/ImageWithEffects';
import cn from 'classnames';

export const AboutCompany: React.FC = () => {
  return (
    <section className={classes.about}>
      <div className={classes.aboutContainer}>
        <div className={classes.sectionContent}>
          <SectionText
            variant="black"
            title="Компания"
            titleBold="ТЕХНОСЕТИ"
            subtitle="Наша компания является прямым поставщиком сертефицированных ПНД фитингов из Китая и Европы. 
Официально представляем заводы известных лидеров рынка, а также имеем максимальные скидки за счёт объёма поставляемой продукции. 
Мы работаем на несколько регионов России. Имеем два склада в Москве и Краснодаре где комплектуем строительные объекты под ключ.
"
          />
          <Image
            src={CompanyLogo}
            alt="Логотип компании"
            width={96}
            height={96}
            style={{ margin: '0' }}
          ></Image>
          <h3 className={cn(classes.title)}>Артем Петров</h3>
          <p className="description">Генеральный директор</p>
        </div>
        <ImageWithEffects />
      </div>
    </section>
  );
};
