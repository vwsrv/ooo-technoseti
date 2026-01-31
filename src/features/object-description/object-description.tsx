'use client';

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import classes from './styles.module.scss';
import { imageNotFound, PageHeader, ImagePopup } from '@/shared';
import { fetchPortfolio } from '@/app/api';
import type {
  PortfolioItem,
  PortfolioImageItem,
} from '@/shared/constants/portfolio';

const getImageSrc = (item: PortfolioImageItem): string =>
  item.image && item.image.trim() !== '' ? item.image : imageNotFound;

export const ObjectDescription: FC = () => {
  const params = useParams();
  const id = params?.id;
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [isPopupOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    fetchPortfolio().then(setPortfolio);
  }, []);

  const currentObject = portfolio.find(
    (item) => item.id === Number(typeof id === 'string' ? id : undefined)
  );

  if (portfolio.length === 0) {
    return <div>Загрузка...</div>;
  }

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
                src={getImageSrc(item)}
                alt={`Image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 280px, 400px"
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
