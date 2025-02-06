'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { ContactCard } from '@/shared/ui/ContactCard/ContactCard';
import { HeaderSection } from '@/shared/ui/HeaderSection/HeaderSection';
import officeImage from '../../../public/for-contactsPage/office.jpg';
import skladImage from '../../../public/for-contactsPage/sklad.jpg';

const ContactsPage: React.FC = (props) => {
  const myContacts = [
    {
      src: officeImage,
      title: 'Москва. Центральный офис',
      address:
        'Муниципальный Округ Хорошевский, ш Хорошёвское, д. 38, помещ. 506',
      tel: '+7 (499) 404-14-10',
      email: 'info@technoseti.ru',
    },
    {
      src: skladImage,
      imageLink: 'string',
      title: 'Мос. область, Склад',
      address: 'улица Дзержинского, 102, Орехово-Зуево',
      tel: '+7 (499) 404-14-10',
    },
    {
      src: skladImage,
      imageLink: 'string',
      title: 'Склад в Краснодаре',
      address: 'Майский проезд, д. 3',
      tel: '+7 (499) 404-14-10',
    },
  ];

  return (
    <div className={cn(classes.contactsPage)}>
      <HeaderSection headerTitle="Контакты" />
      <div className={cn(classes.cardList)}>
        {myContacts.map((item, index) => (
          <div key={index} className={cn(classes.cardItem)}>
            <ContactCard
              title={item.title}
              src={item.src}
              address={item.address}
              email={item.email}
              tel={item.tel}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactsPage;
