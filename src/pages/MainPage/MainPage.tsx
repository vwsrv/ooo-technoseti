import React from 'react';
import { Navigation } from '../../features/navigation/navigation';
import { Introduction } from '@/features/introduction/introduction';
import { Advantages } from '@/features/advantages/advantages';
import { AboutCompany } from '@/features/about-company/about-company';
import { OurFeatures } from '@/features/ourFeatures';
import { Portfolio } from '@/features/portfolio/Portfolio';
import { Sertificats } from '@/features/sertificats';

const MainPage: React.FC = () => {
  return (
    <div>
      <div className="test-class">
        <Navigation />
      </div>
      <div className="content">
        <Introduction />
        <Advantages />
        <AboutCompany />
        <Advantages />
        <OurFeatures />
        <Sertificats />
        <Portfolio />
      </div>
    </div>
  );
};

export default MainPage;
