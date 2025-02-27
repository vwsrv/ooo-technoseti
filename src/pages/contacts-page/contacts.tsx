'use client';

import React from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { ContactCard } from '@/shared/ui/contact-card/ContactCard';
import { HeaderSection } from '@/shared/ui/header-section/HeaderSection';
import officeImage from '../../../public/for-contactsPage/office.jpg';
import skladImage from '../../../public/for-contactsPage/sklad.jpg';

const ContactsPage: React.FC = (props) => {
  const myContacts = [
    {
      src: officeImage,
      title: ' г. Москва. Центральный офис',
      address:
        'муниципальный округ Басманный, переулок Яковоапостольский, д. 17, помещ. 1/П',
      tel: '+7 (916) 776-90-02',
      email: 'info@technoseti.ru',
    },
    {
      src: skladImage,
      imageLink: 'string',
      title: 'Склад в Мос. области',
      address: '142601, г. Орехово-Зуево, улица Торфобрикетная, дом 19',
      tel: '+7 (499) 404-14-10',
    },
    {
      src: skladImage,
      imageLink: 'string',
      title: 'Склад в г. Краснодар',
      address: '350039, г. Краснодар, Майский проезд, д. 3',
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
