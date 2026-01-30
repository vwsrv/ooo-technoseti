'use client';

import { FC, useState } from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import { imageNotFound, portfolioDataList } from '@/shared';
import { ImagePopup } from '@/features';
import Image from 'next/image';
import { useParams } from 'next/navigation';

const ObjectDescriptionPage: FC = () => {
  const params = useParams();
  const [isPopupOpen, setIsOpen] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState<string | null>(null);

  if (!params || typeof params.id !== 'string') {
    return <div>Объект не найден</div>;
  }

  const { id } = params;
  const currentObject = portfolioDataList.find(
    (item) => item.id === Number(id)
  );

  if (!currentObject) {
    return <div>Объект не найден</div>;
  }

  const handleImageClick = (imageUrl: string) => {
    setCurrentImageUrl(imageUrl);
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
    setCurrentImageUrl(null);
  };

  return (
    <div className={cn(classes.objectDescriptionPage)}>
      <div className={cn(classes.imageList)}>
        {currentObject.src.map((item, index) => (
          <div
            className={cn(classes.imageContainer)}
            key={index}
            onClick={() =>
              handleImageClick(
                typeof item.image === 'string' ? item.image : item.image.src
              )
            }
          >
            <Image
              src={item.image || imageNotFound}
              alt={`Image ${index + 1}`}
              fill={true}
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
      <ImagePopup
        isMounted={isPopupOpen}
        imageUrl={currentImageUrl!}
        images={currentObject.src.map((item) =>
          typeof item.image === 'string' ? item.image : item.image.src
        )}
        onClose={handleClosePopup}
      />
      <div className={classes.objectTextContainer}>
        {currentObject.info?.map((item, index) => (
          <div className={classes.objectText} key={index}>
            <h1 className={classes.objectTitle}>{item.infoTitle}</h1>
            <p className={classes.objectSubTitle}>{item.infoDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ObjectDescriptionPage;
