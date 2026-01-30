'use client';

import styles from './styles.module.scss';
import { SectionText } from '@/shared';
import { FeatureCardList } from '@/features';

export const OurFeatures: React.FC = () => {
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
          <SectionText
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
