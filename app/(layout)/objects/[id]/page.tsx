'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import ObjectDescriptionPage from '@/pages/objects-page/object-description-page/object-description-page';
import classes from './styles.module.scss';

const ObjectDescription: React.FC = () => {
  return (
    <main>
      <div className={classes.layout}>
        <ObjectDescriptionPage />
      </div>
    </main>
  );
};

export default ObjectDescription;
