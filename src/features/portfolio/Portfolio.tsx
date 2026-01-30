'use client';

import { FC } from 'react';
import styles from './styles.module.scss';
import { SectionText, ImageHover, imageOurObject } from '@/shared';
import classes from './styles.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const Portfolio: FC = () => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push('/objects');
  };

  return (
    <section className={styles.portfolio}>
      <div className={styles.sectionContent}>
        <div className={styles.sectionTextContainer}>
          <SectionText
            title="Наши"
            titleBold="объекты"
            subtitle="В данном разделе представлены некоторые реализованные проекты"
          />
          <Link className={cn(classes.menuLink)} href="/objects">
            <p>Смотреть еще</p>
          </Link>
        </div>
        <div className={styles.imageContainer} onClick={() => handleNavigate()}>
          <ImageHover
            imageUrl={imageOurObject.src}
            title="Аэровокзальный комплекс Елизово"
            buttonText="Перейти"
            onButtonClick={() => handleNavigate()}
          />
        </div>
      </div>
    </section>
  );
};
