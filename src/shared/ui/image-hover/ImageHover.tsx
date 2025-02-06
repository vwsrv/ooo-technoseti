import React from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';
import { typeImageHoverProps } from './types';
import { imageNotFound } from '../../constants/not-found-image-link';

export const ImageHover: React.FC<typeImageHoverProps> = (props) => {
  const { imageUrl, title, buttonText, onButtonClick, onImageClick } = props;

  return (
    <div className={cn(classes.imageHoverContainer)}>
      <div className={cn(classes.imageWrapper)}>
        <img
          src={imageUrl ? imageUrl : imageNotFound}
          alt={title}
          className={classes.image}
          onClick={onImageClick}
        />
        <div className={cn(classes.overlay)}></div>
        <div className={cn(classes.title)}>{title}</div>
        <button className={cn(classes.button)} onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
      <div className={cn(classes.purpleLine)}></div>
    </div>
  );
};
