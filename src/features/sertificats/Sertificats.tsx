'use client';

import classes from './styles.module.scss';
import { ButtonComponent } from '@/shared/ui/button-component/buttonComponent';

export const Sertificats: React.FC = () => {
  return (
    <section className={classes.sertificats}>
      <div className={classes.sectionContent}>
        <p className="name">Все трубы сертифицированы и соответствуют ГОСТам</p>
        <ButtonComponent variant="white">Сертификаты</ButtonComponent>
      </div>
    </section>
  );
};
