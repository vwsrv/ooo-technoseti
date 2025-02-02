import React from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';
import { ImageHoverProps } from './types';
import { Arrow } from '../Arrow';

export const ImageHover: React.FC<ImageHoverProps> = (props) => {
  const { imageUrl, title, buttonText, onButtonClick } = props;

  return (
    <div className={cn(classes.imageHoverContainer)}>
      <div className={cn(classes.imageWrapper)}>
        <img src={imageUrl} alt={title} className={classes.image} />
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
