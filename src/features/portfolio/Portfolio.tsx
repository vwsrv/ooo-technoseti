'use client';

import styles from './styles.module.scss';
import { SectionText } from '@/shared/ui/SectionText';
import classes from './styles.module.scss';
import cn from 'classnames';
import { ImageHover } from '@/shared/ui/ImageHover';
import { Arrow } from '@/shared/ui/Arrow';
import Link from 'next/link';
import ourObject from '../../shared/images/for-portfolio/our-object.jpg';

export const Portfolio: React.FC = () => {
  return (
    <section className={styles.portfolio}>
      <div className={styles.sectionContent}>
        <div className={styles.sectionTextContainer}>
          <SectionText
            title="Наши"
            titleBold="объекты"
            subtitle="В данном разделе представлены некоторые реализованные проекты"
          />
          <Link className={cn(classes.menuLink)} href={'/'}>
            <p>Смотреть еще</p>
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <ImageHover
            imageUrl={ourObject.src}
            title="Аэровокзальный комплекс Елизово"
            buttonText="Перейти"
            onButtonClick={() => console.log('click')}
          />
        </div>
      </div>
    </section>
  );
};
