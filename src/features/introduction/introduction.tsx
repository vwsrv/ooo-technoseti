'use client';

import styles from './styles.module.scss';
import { SectionText } from '@/shared/ui/SectionText';

import { VideoBox } from '@/shared/ui/VideoBox';
import { Button } from '@/shared/ui/Button';
import { log } from 'console';

export const Introduction: React.FC = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.introContainer}>
        <div className={styles.content}>
          <SectionText
            variant="pink"
            title="Комплектация cтроительных объектов и материалов"
            titleBold="для инженерных сетей"
            subtitle="Мы молодая быстрорастущая организация, которая занимается поставкой труб, фассоных изделий, запорной арматуры для систем водоснабжения, водоотведения, электрификации, газификации. У нас два больших собственных склада в Москве и Краснодаре"
          />
          <Button
            variant="blue"
            onClick={() => console.log('Переход на страницу с продукцией')}
          >
            ПРОДУКЦИЯ
          </Button>
          <VideoBox
            disabled={false}
            onClick={() => console.log('Переход на видео')}
          >
            Видео о компании
          </VideoBox>
        </div>
      </div>
    </section>
  );
};
