import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { SectionText } from '../section-text';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: 'Трубы PETRIX',
      link: '/',
    },
    {
      title: 'Канализационная насосная станция',
      link: '/',
    },
    {
      title: 'Пластиковые колодцы',
      link: '/',
    },
    {
      title: 'Запорная арматура',
      link: '/',
    },
  ];

  return (
    <footer className={cn(classes.footer)}>
      <div className={cn(classes.footerColumns)}>
        <div className={cn(classes.footerColumnDescription)}>
          <SectionText title="Комплексный инжиниринг" variant="orange" />
          <p>
            Современные инженерные решения для систем водоснабжения,
            теплоснабжения, электрификации и водоотведения.
          </p>
        </div>
        <div className={cn(classes.footerColumnSchedule)}>
          <SectionText title="Время работы" variant="orange" />
          <div className={cn(classes.workDays)}>
            <p>Понедельник - Пятница</p>
            <p className={cn(classes.typeOrange)}>С 9:00 до 17:00</p>
          </div>
          <div className={cn(classes.workDays)}>
            <p>Суббота</p>
            <p className={cn(classes.typeOrange)}>Закрыто</p>
          </div>
          <div className={cn(classes.workDays)}>
            <p>Воскресенье</p>
            <p className={cn(classes.typeOrange)}>Закрыто</p>
          </div>
        </div>
        <div className={cn(classes.footerColumnLinks)}>
          <SectionText title="Быстрые ссылки" variant="orange" />
          {footerLinks.map((item, key) => (
            <Link href={item.link} className={cn(classes.footerLink)} key={key}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className={cn(classes.footerRowAbout)}>
        <Link
          href="https://github.com/vwsrv"
          className={cn(classes.footerLink)}
        >
          © 2025 ООО «ТЕХНОСЕТИ». Автор: Василий В.
        </Link>
      </div>
    </footer>
  );
};
