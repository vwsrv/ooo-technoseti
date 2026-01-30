'use client';

import { FC } from 'react';
import styles from './styles.module.scss';
import { SectionHeader } from '@/shared';
import { FeatureCardList } from '@/features';

export const OurFeatures: FC = () => {
  const techCardData = [
    {
      name: 'Проектирование',
      description:
        'Проектируем очистные, КНС, КОС, ЛОС и т д. Согласовываем утверждаем РД. Прям рэпчина',
    },
    {
      name: 'Проектирование',
      description: 'Поставка оборудования очень быстро, очень в срок.',
    },
    {
      name: 'Проектирование',
      description:
        'Шеф-монтаж, сервисное обслуживание и постгарантийный ремонт.',
    },
  ];
  return (
    <section className={styles.ourFeatures}>
      <div className={styles.sectionContent}>
        <div className={styles.sectionTitle}>
          <SectionHeader
            variant="blue"
            title="Комплексный"
            titleBold="инжиниринг"
          />
        </div>
        <FeatureCardList techCardList={techCardData} />
      </div>
    </section>
  );
};
