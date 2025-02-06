'use client';

import { SectionText } from '@/shared/ui/section-text';
import classes from './styles.module.scss';
import cn from 'classnames';
import { Button } from '@/shared/ui/button';

export const Sertificats: React.FC = () => {
  return (
    <section className={classes.sertificats}>
      <div className={classes.sectionContent}>
        <p className="name">Все трубы сертифицированы и соответствуют ГОСТам</p>
        <Button variant="white">Сертификаты</Button>
      </div>
    </section>
  );
};
