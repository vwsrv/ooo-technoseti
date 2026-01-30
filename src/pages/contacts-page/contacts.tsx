'use client';

import { FC } from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { ContactCard, PageHeader } from '@/shared';

const officeImage = '/for-contactsPage/office.jpg';
const skladImage = '/for-contactsPage/sklad.jpg';

const ContactsPage: FC = () => (
  <div className={cn(classes.contactsPage)}>
    <PageHeader headerTitle="Контакты" />
    <div className={cn(classes.cardList)}>
      <div className={cn(classes.cardItem)}>
        <ContactCard
          title="г. Москва. Центральный офис"
          src={officeImage}
          address="муниципальный округ Басманный, переулок Яковоапостольский, д. 17, помещ. 1/П"
          tel="+7 (916) 776-90-02"
          email="info@technoseti.ru"
        />
      </div>
      <div className={cn(classes.cardItem)}>
        <ContactCard
          title="Склад в Мос. области"
          src={skladImage}
          address="142601, г. Орехово-Зуево, улица Торфобрикетная, дом 19"
          tel="+7 (916) 776-90-02"
        />
      </div>
      <div className={cn(classes.cardItem)}>
        <ContactCard
          title="Склад в г. Краснодар"
          src={skladImage}
          address="350039, г. Краснодар, Майский проезд, д. 3"
          tel="+7 (916) 776-90-02"
        />
      </div>
    </div>
  </div>
);

export default ContactsPage;
