'use client';

import { SectionText } from '@/shared/ui/SectionText';
import classes from './styles.module.scss';
import cn from 'classnames';
import { Button } from '@/shared/ui/Button';

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
