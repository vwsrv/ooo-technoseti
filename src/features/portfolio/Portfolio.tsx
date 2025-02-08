'use client';

import styles from './styles.module.scss';
import { SectionText } from '@/shared/ui/section-text';
import classes from './styles.module.scss';
import cn from 'classnames';
import { ImageHover } from '@/shared/ui/image-hover';
import Link from 'next/link';
import ourObject from '../../shared/images/for-portfolio/our-object.jpg';
import { useRouter } from 'next/navigation';

export const Portfolio: React.FC = () => {
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
            imageUrl={ourObject.src}
            title="Аэровокзальный комплекс Елизово"
            buttonText="Перейти"
            onButtonClick={() => handleNavigate()}
          />
        </div>
      </div>
    </section>
  );
};
