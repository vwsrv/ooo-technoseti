'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { CardItem } from '@/shared/ui/ItemCard';
import { HeaderSection } from '@/shared/ui/HeaderSection/HeaderSection';
import fittings from '../../../src/shared/images/for-section-catalog/fittings.jpeg';
import kolodcy from '../../../src/shared/images/for-section-catalog/kolodcy.jpeg';
import svarka from '../../../src/shared/images/for-section-catalog/svarka.jpeg';
import trubyPnd from '../../../src/shared/images/for-section-catalog/truby-pnd.jpeg';
import zaporArm from '../../../src/shared/images/for-section-catalog/zapor-arm.jpeg';

const Catalog: React.FC = () => {
  const dataList = [
    {
      link: fittings,
      title: 'Фитинги пнд',
      description: 'Фитинги электросварные и СПИГОТ для газа и воды.',
    },
    {
      link: trubyPnd,
      title: 'Трубы пнд',
      description: 'Фитинги электросварные и СПИГОТ для газа и воды.',
    },
    {
      link: zaporArm,
      title: 'Запорная арматура',
      description:
        'Задвижки, клапаны, затворы и другая современная трубопроводная арматура.',
    },
    {
      link: kolodcy,
      title: 'Пластиковые колодцы',
      description: 'Безнапорные магистральные и внутриквартальные сети.',
    },
    {
      link: svarka,
      title: 'Сварочное оборудование',
      description:
        'Электромуфтовые сварочные аппараты, аппараты для стыковой сварки',
    },
  ];

  return (
    <div className={cn(classes.catalog)}>
      <HeaderSection headerTitle="Продукция" />
      <div className={cn(classes.catalogContainer)}>
        <CardItem
          dataList={dataList}
          onClick={() => console.log('Переход на страницу товара')}
        />
      </div>
    </div>
  );
};

export default Catalog;
