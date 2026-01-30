'use client';

import { FC, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import classes from './styles.module.scss';
import {
  imageNotFound,
  portfolioDataList,
  PageHeader,
  ImagePopup,
} from '@/shared';

const getImageSrc = (item: { image: string | { src: string } }) =>
  typeof item.image === 'string' ? item.image : item.image.src;

export const ObjectDescription: FC = () => {
  const params = useParams();
  const id = params?.id;
  const [isPopupOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const currentObject = portfolioDataList.find(
    (item) => item.id === Number(typeof id === 'string' ? id : undefined)
  );

  if (!currentObject) {
    return <div>Объект не найден</div>;
  }

  const imageUrls = currentObject.src.map(getImageSrc);

  return (
    <div className={classes.objectDescriptionPage}>
      <PageHeader headerTitle={currentObject.title} />
      <div className={classes.content}>
        <div className={classes.imageList}>
          {currentObject.src.map((item, index) => (
            <div
              className={classes.imageContainer}
              key={item.id}
              onClick={() => {
                setSelectedIndex(index);
                setIsOpen(true);
              }}
            >
              <Image
                src={item.image || imageNotFound}
                alt={`Image ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
        <div className={classes.objectTextContainer}>
          {currentObject.info?.map((item, index) => (
            <div className={classes.objectText} key={index}>
              <p className={classes.objectSubTitle}>{item.infoDescription}</p>
            </div>
          ))}
        </div>
      </div>
      <ImagePopup
        key={isPopupOpen ? (selectedIndex ?? 0) : 'closed'}
        images={imageUrls}
        initialIndex={selectedIndex ?? 0}
        onClose={() => {
          setIsOpen(false);
          setSelectedIndex(null);
        }}
        isMounted={isPopupOpen}
      />
    </div>
  );
};
