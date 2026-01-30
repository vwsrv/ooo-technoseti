'use client';

import { FC, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import classes from './styles.module.scss';
import { typePopupProps } from './types';

export const Popup: FC<typePopupProps> = ({ isMounted, onClose, children }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    if (isMounted) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMounted]);

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
        {typeof children === 'function' ? children(handleClose) : children}
      </div>
    </div>,
    document.body
  );
};
