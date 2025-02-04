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
      title: 'Центральный офис',
      address: 'Москва, ул. Лесная, д. 43',
      tel: '+7 (499) 404-14-10',
      email: 'info@thermoforce.ru',
    },
    {
      src: skladImage,
      imageLink: 'string',
      title: 'Склад',
      address: 'Московская обл, го Мытищи, ул. Южная, с13А',
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
