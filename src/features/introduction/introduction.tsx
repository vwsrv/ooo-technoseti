'use client';

import classes from './styles.module.scss';
import { SectionText } from '@/shared/ui/section-text';
import { VideoBox } from '@/shared/ui/video-box';
import { ButtonComponent } from '@/shared/ui/button-component';
import { useRouter } from 'next/navigation';

export const Introduction: React.FC = () => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push('/catalog');
  };

  return (
    <section className={classes.intro}>
      <div className={classes.introContainer}>
        <div className={classes.content}>
          <SectionText
            variant="pink"
            title="Комплектация cтроительных объектов и материалов"
            titleBold="для инженерных сетей"
            subtitle="Мы молодая быстрорастущая организация, которая занимается поставкой труб, фассоных изделий, запорной арматуры для систем водоснабжения, водоотведения, электрификации, газификации. У нас два больших собственных склада в Москве и Краснодаре"
          />
          <div className={classes.buttonsContainer}>
            <ButtonComponent variant="blue" onClick={() => handleNavigate()}>
              ПРОДУКЦИЯ
            </ButtonComponent>
            <VideoBox
              disabled={false}
              onClick={() => console.log('Переход на видео')}
            >
              Видео о компании
            </VideoBox>
          </div>
        </div>
      </div>
    </section>
  );
};
