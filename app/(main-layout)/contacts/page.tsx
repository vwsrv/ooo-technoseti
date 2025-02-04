import React from 'react';
import ContactsPage from '@/pages/contacts-page/contacts';
import officeImage from '../../../public/for-contactsPage/office.jpg';
import skladImage from '../../../public/for-contactsPage/sklad.jpg';

const Contacts: React.FC = () => {
  return (
    <main>
      <div className="pageLayout">
        <ContactsPage />
      </div>
    </main>
  );
};

export default Contacts;
