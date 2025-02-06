'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { Advantage } from '@/shared/ui/advantage/advantage';

export const Advantages: React.FC = () => {
  const checkBoxData = [
    {
      title: 'Поставка в день обращения',
      subtitle: 'Везём очень быстро, особенно в тех случаях когда нужно вчера.',
    },
    {
      title: 'Товар сертифицирован',
      subtitle:
        'Только по ГОСТ и ТУ. На всё есть документы. Вся продуцкия имеет протокол испытаний и проверенна годами.',
    },
    {
      title: 'Наличие на складе',
      subtitle:
        'Все ходовые диаметры всегда есть в наличии. В наличии имеем даже редкие фасонные части.',
    },
  ];

  return (
    <section className={cn(classes.advantages)}>
      <div className={cn(classes.advantagesContainer)}>
        {checkBoxData.map((data, index) => (
          <Advantage key={index} title={data.title} subtitle={data.subtitle} />
        ))}
      </div>
    </section>
  );
};
