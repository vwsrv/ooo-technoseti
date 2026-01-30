'use client';

import { FC } from 'react';
import classes from './styles.module.scss';
import { SectionHeader, VideoButton, Button } from '@/shared';
import { useRouter } from 'next/navigation';

export const Introduction: FC = () => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push('/catalog');
  };

  return (
    <section className={classes.intro}>
      <div className={classes.introContainer}>
        <div className={classes.content}>
          <SectionHeader
            variant="pink"
            title="Комплектация cтроительных объектов и материалов"
            titleBold="для инженерных сетей"
            subtitle="Мы молодая быстрорастущая организация, которая занимается поставкой труб, фассоных изделий, запорной арматуры для систем водоснабжения, водоотведения, электрификации, газификации. У нас два больших собственных склада в Москве и Краснодаре"
          />
          <div className={classes.buttonsContainer}>
            <Button variant="blue" onClick={() => handleNavigate()}>
              ПРОДУКЦИЯ
            </Button>
            <VideoButton
              disabled={false}
              onClick={() => console.log('Переход на видео')}
            >
              Видео о компании
            </VideoButton>
          </div>
        </div>
      </div>
    </section>
  );
};
