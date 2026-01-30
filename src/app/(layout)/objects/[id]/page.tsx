'use client';

import { FC } from 'react';
import ObjectDescriptionPage from '@/pages/objects-page/object-description-page/object-description-page';
import classes from './styles.module.scss';

const ObjectDescription: FC = () => {
  return (
    <main>
      <div className={classes.layout}>
        <ObjectDescriptionPage />
      </div>
    </main>
  );
};

export default ObjectDescription;
