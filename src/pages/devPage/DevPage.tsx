import React from 'react';
import { Navigation } from '../../features/navigation/navigation';
import { Introduction } from '@/features/introduction/introduction';
import { Advantages } from '@/features/advantages/advantages';
import { AboutCompany } from '@/features/about-company/about-company';

export const DevPage: React.FC = () => {
  return (
    <div>
      <div className="test-class">
        <Navigation />
      </div>
      <div className="content">
        <Introduction />
        <Advantages />
        <AboutCompany />
      </div>
    </div>
  );
};
