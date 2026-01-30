'use client';

import { FC } from 'react';
import classes from './styles.module.scss';
import { ButtonComponent } from '@/shared';

export const Sertificats: FC = () => {
  return (
    <section className={classes.sertificats}>
      <div className={classes.sectionContent}>
        <p className="name">Все трубы сертифицированы и соответствуют ГОСТам</p>
        <ButtonComponent variant="white">Сертификаты</ButtonComponent>
      </div>
    </section>
  );
};
