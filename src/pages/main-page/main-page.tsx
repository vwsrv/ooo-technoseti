'use client';

import { FC } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import classes from './index.module.scss';
import {
  SectionHeader,
  VideoButton,
  Button,
  Advantage,
  FeatureCard,
  imageForWhiteBgLogoShort,
  ImageWithEffects,
  ImageHover,
  imageOurObject,
} from '@/shared';

const MainPage: FC = () => {
  const router = useRouter();

  const handleNavigateToCatalog = () => {
    router.push('/catalog');
  };

  const handleNavigateToObjects = () => {
    router.push('/objects');
  };

  return (
    <div className={classes.mainPage}>
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
              <Button variant="blue" onClick={() => handleNavigateToCatalog()}>
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

      <section className={cn(classes.advantages)}>
        <div className={cn(classes.advantagesContainer)}>
          <Advantage
            title="Поставка в день обращения"
            subtitle="Везём очень быстро, особенно в тех случаях когда нужно вчера."
          />
          <Advantage
            title="Товар сертифицирован"
            subtitle="Только по ГОСТ и ТУ. На всё есть документы. Вся продуцкия имеет протокол испытаний и проверенна годами."
          />
          <Advantage
            title="Наличие на складе"
            subtitle="Все ходовые диаметры всегда есть в наличии. В наличии имеем даже редкие фасонные части."
          />
        </div>
      </section>

      <section className={classes.about}>
        <div className={classes.aboutContainer}>
          <div className={classes.aboutSectionContent}>
            <SectionHeader
              variant="black"
              title="Компания"
              titleBold="ТЕХНОСЕТИ"
              subtitle="Наша компания является прямым поставщиком сертефицированных ПНД фитингов из Китая и Европы. 
Официально представляем заводы известных лидеров рынка, а также имеем максимальные скидки за счёт объёма поставляемой продукции. 
Мы работаем на несколько регионов России. Имеем два склада в Москве и Краснодаре где комплектуем строительные объекты под ключ.
"
            />
            <Image
              src={imageForWhiteBgLogoShort}
              alt="Логотип компании"
              width={96}
              height={96}
              style={{ margin: '0' }}
            />
            <h3 className={cn(classes.aboutTitle)}>Артем Петров</h3>
            <p className="description">Генеральный директор</p>
          </div>
          <ImageWithEffects />
        </div>
      </section>

      <section className={cn(classes.advantages)}>
        <div className={cn(classes.advantagesContainer)}>
          <Advantage
            title="Поставка в день обращения"
            subtitle="Везём очень быстро, особенно в тех случаях когда нужно вчера."
          />
          <Advantage
            title="Товар сертифицирован"
            subtitle="Только по ГОСТ и ТУ. На всё есть документы. Вся продуцкия имеет протокол испытаний и проверенна годами."
          />
          <Advantage
            title="Наличие на складе"
            subtitle="Все ходовые диаметры всегда есть в наличии. В наличии имеем даже редкие фасонные части."
          />
        </div>
      </section>

      <section className={classes.ourFeatures}>
        <div className={classes.ourFeaturesSectionContent}>
          <SectionHeader
            variant="blue"
            title="Комплексный"
            titleBold="инжиниринг"
          />
          <div className={cn(classes.techCardList)}>
            <ul className={classes.techCardListContainer}>
              <FeatureCard
                cardItemData={{
                  name: 'Проектирование',
                  description:
                    'Проектируем очистные, КНС, КОС, ЛОС и т д. Согласовываем утверждаем РД. Прям рэпчина',
                }}
              />
              <FeatureCard
                cardItemData={{
                  name: 'Проектирование',
                  description:
                    'Поставка оборудования очень быстро, очень в срок.',
                }}
              />
              <FeatureCard
                cardItemData={{
                  name: 'Проектирование',
                  description:
                    'Шеф-монтаж, сервисное обслуживание и постгарантийный ремонт.',
                }}
              />
            </ul>
          </div>
        </div>
      </section>

      <section className={classes.sertificats}>
        <div className={classes.certificatsSectionContent}>
          <p className="name">
            Все трубы сертифицированы и соответствуют ГОСТам
          </p>
          <Button variant="white">Сертификаты</Button>
        </div>
      </section>

      <section className={classes.portfolio}>
        <div className={classes.portfolioSectionContent}>
          <div className={classes.sectionTextContainer}>
            <SectionHeader
              title="Наши"
              titleBold="объекты"
              subtitle="В данном разделе представлены некоторые реализованные проекты"
            />
            <Link className={cn(classes.menuLink)} href="/objects">
              <p>Смотреть еще</p>
            </Link>
          </div>
          <div
            className={classes.imageContainer}
            onClick={() => handleNavigateToObjects()}
          >
            <ImageHover
              imageUrl={imageOurObject.src}
              title="Аэровокзальный комплекс Елизово"
              buttonText="Перейти"
              onButtonClick={() => handleNavigateToObjects()}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
