import React from 'react';
import classes from './index.module.scss';
import {
  Introduction,
  Advantages,
  AboutCompany,
  OurFeatures,
  Portfolio,
  Sertificats,
} from '@/features';

const MainPage: React.FC = () => {
  return (
    <div className={classes.mainPage}>
      <Introduction />
      <Advantages />
      <AboutCompany />
      <Advantages />
      <OurFeatures />
      <Sertificats />
      <Portfolio />
    </div>
  );
};

export default MainPage;
