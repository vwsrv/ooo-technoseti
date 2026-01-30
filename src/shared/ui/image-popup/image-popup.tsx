'use client';

import { FC, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { Popup } from '../popup';
import { imageNotFound } from '@/shared';
import classes from './styles.module.scss';
import { typeImagePopupProps } from './types';

const ANIMATION_DURATION_MS = 300;

export const ImagePopup: FC<typeImagePopupProps> = ({
  images,
  initialIndex = 0,
  onClose,
  isMounted,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<
    'left' | 'right' | null
  >(null);

  const goTo = useCallback(
    (direction: 'prev' | 'next') => {
      if (isAnimating || images.length === 0) return;
      setAnimationDirection(direction === 'prev' ? 'left' : 'right');
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) =>
          direction === 'prev'
            ? prev > 0
              ? prev - 1
              : images.length - 1
            : prev < images.length - 1
              ? prev + 1
              : 0
        );
        setIsAnimating(false);
      }, ANIMATION_DURATION_MS);
    },
    [isAnimating, images.length]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') goTo('prev');
      if (event.key === 'ArrowRight') goTo('next');
    };

    if (isMounted) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMounted, goTo]);

  const currentSrc = images[currentIndex] || imageNotFound;
  const showNav = images.length > 1;

  return (
    <Popup isMounted={isMounted} onClose={onClose}>
      {(handleClose) => (
        <>
          <div className={classes.imageContainer}>
            <div
              className={cn(classes.imageWrapper, {
                [classes.slideLeft]:
                  isAnimating && animationDirection === 'left',
                [classes.slideRight]:
                  isAnimating && animationDirection === 'right',
              })}
            >
              <Image
                src={currentSrc}
                alt={`Изображение ${currentIndex + 1} из ${images.length}`}
                className={classes.image}
                width={2044}
                height={1024}
                style={{ objectFit: 'contain' }}
              />
            </div>
            {showNav && (
              <>
                <button
                  type="button"
                  className={cn(classes.navigationButton, classes.prev)}
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo('prev');
                  }}
                  aria-label="Предыдущее изображение"
                >
                  &#10094;
                </button>
                <button
                  type="button"
                  className={cn(classes.navigationButton, classes.next)}
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo('next');
                  }}
                  aria-label="Следующее изображение"
                >
                  &#10095;
                </button>
              </>
            )}
          </div>
          <button
            type="button"
            className={classes.closeButton}
            onClick={handleClose}
            aria-label="Закрыть"
          >
            &times;
          </button>
        </>
      )}
    </Popup>
  );
};
