import { FC } from 'react';
import classes from './index.module.scss';
import {
  Introduction,
  Advantages,
  AboutCompany,
  OurFeatures,
  Portfolio,
  Certificates,
} from '@/features';

const MainPage: FC = () => {
  return (
    <div className={classes.mainPage}>
      <Introduction />
      <Advantages />
      <AboutCompany />
      <Advantages />
      <OurFeatures />
      <Certificates />
      <Portfolio />
    </div>
  );
};

export default MainPage;
