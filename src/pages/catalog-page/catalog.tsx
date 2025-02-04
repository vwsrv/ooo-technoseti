'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { CardItem } from '@/shared/ui/ItemCard';
import { HeaderSection } from '@/shared/ui/HeaderSection/HeaderSection';

const Catalog: React.FC = () => {
  const dataList = [
    {
      link: '',
      title: 'Трубы PERTiX',
      description:
        'Термостойкие трубы PERTiX от компании ТЕРМОФОРС Современная система трубопроводов PERTiX с увеличенным слоем теплоизоляции для наружных сетей теплоснабжения и горячего водоснабжения. ГОСТ',
    },
    {
      link: '',
      title: 'Трубы PERTiX',
      description:
        'Термостойкие трубы PERTiX от компании ТЕРМОФОРС Современная система трубопроводов PERTiX с увеличенным слоем теплоизоляции для наружных сетей теплоснабжения и горячего водоснабжения. ГОСТ',
    },
    {
      link: '',
      title: 'Трубы PERTiX',
      description:
        'Термостойкие трубы PERTiX от компании ТЕРМОФОРС Современная система трубопроводов PERTiX с увеличенным слоем теплоизоляции для наружных сетей теплоснабжения и горячего водоснабжения. ГОСТ',
    },
    {
      link: '',
      title: 'Трубы PERTiX',
      description:
        'Термостойкие трубы PERTiX от компании ТЕРМОФОРС Современная система трубопроводов PERTiX с увеличенным слоем теплоизоляции для наружных сетей теплоснабжения и горячего водоснабжения. ГОСТ',
    },
    {
      link: '',
      title: 'Трубы PERTiX',
      description:
        'Термостойкие трубы PERTiX от компании ТЕРМОФОРС Современная система трубопроводов PERTiX с увеличенным слоем теплоизоляции для наружных сетей теплоснабжения и горячего водоснабжения. ГОСТ',
    },
    {
      link: '',
      title: 'Трубы PERTiX',
      description:
        'Термостойкие трубы PERTiX от компании ТЕРМОФОРС Современная система трубопроводов PERTiX с увеличенным слоем теплоизоляции для наружных сетей теплоснабжения и горячего водоснабжения. ГОСТ',
    },
    {
      link: '',
      title: 'Трубы PERTiX',
      description:
        'Термостойкие трубы PERTiX от компании ТЕРМОФОРС Современная система трубопроводов PERTiX с увеличенным слоем теплоизоляции для наружных сетей теплоснабжения и горячего водоснабжения. ГОСТ',
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
