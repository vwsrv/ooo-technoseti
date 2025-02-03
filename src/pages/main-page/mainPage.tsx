import React from 'react';
import classes from './index.module.scss';
import { Introduction } from '@/features/introduction/introduction';
import { Advantages } from '@/features/advantages/advantages';
import { AboutCompany } from '@/features/about-company/about-company';
import { OurFeatures } from '@/features/ourFeatures';
import { Portfolio } from '@/features/portfolio/Portfolio';
import { Sertificats } from '@/features/sertificats';

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
