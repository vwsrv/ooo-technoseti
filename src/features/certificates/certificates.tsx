'use client';

import { FC } from 'react';
import classes from './styles.module.scss';
import { Button } from '@/shared';

export const Certificates: FC = () => {
  return (
    <section className={classes.sertificats}>
      <div className={classes.sectionContent}>
        <p className="name">Все трубы сертифицированы и соответствуют ГОСТам</p>
        <Button variant="white">Сертификаты</Button>
      </div>
    </section>
  );
};
