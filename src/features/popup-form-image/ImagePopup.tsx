import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import classes from './styles.module.scss';
import { typeImagePopupProps } from './types';
import { createPortal } from 'react-dom';
import { imageNotFound } from '@/shared/constants/not-found-image-link';

const ImagePopup: React.FC<typeImagePopupProps> = (props) => {
  const { images, initialIndex = 0, onClose, isMounted } = props;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isClosing, setIsClosing] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<
    'left' | 'right' | null
  >(null);
  useEffect(() => {
    if (!isMounted) {
      setIsClosing(false);
    }
  }, [isMounted]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      } else if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    if (isMounted) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMounted, currentIndex]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const goToPrevious = () => {
    if (isAnimating) return;
    setAnimationDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : images.length - 1
      );
      setIsAnimating(false);
    }, 300);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setAnimationDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
      setIsAnimating(false);
    }, 300);
  };

  if (!isMounted) return null;

  return createPortal(
    <div
      className={`${classes.overlay} ${isClosing ? classes.closing : ''}`}
      onClick={handleClose}
    >
      <div
        className={`${classes.popup} ${isClosing ? classes.closing : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.imageContainer}>
          <div
            className={`${classes.imageWrapper} ${
              isAnimating
                ? animationDirection === 'left'
                  ? classes.slideLeft
                  : classes.slideRight
                : ''
            }`}
          >
            <Image
              src={images[currentIndex] ? images[currentIndex] : imageNotFound}
              alt={`Popup Image ${currentIndex + 1}`}
              className={classes.image}
              width={2044}
              height={1024}
              objectFit="contain"
            />
          </div>
          <button
            className={`${classes.navigationButton} ${classes.prev}`}
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            &#10094;
          </button>
          <button
            className={`${classes.navigationButton} ${classes.next}`}
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            &#10095;
          </button>
        </div>
        <button className={classes.closeButton} onClick={handleClose}>
          &times;
        </button>
      </div>
    </div>,
    document.body
  );
};

export default ImagePopup;
