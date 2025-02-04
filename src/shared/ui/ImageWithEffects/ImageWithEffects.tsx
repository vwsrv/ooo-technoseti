'use client';

import React, { useRef, useEffect } from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';
import imageForComponent from '../../images/for-imageWithEffects/for-imageWithEffecits.jpeg';
import Image from 'next/image';

export const ImageWithEffects: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        const container = imageRef.current;
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;
        const offsetX = -mouseX * 0.05;
        const offsetY = -mouseY * 0.05;
        container.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={cn(classes.imageContainer)} ref={imageRef}>
      <div className={cn(classes.dotsBackground)}></div>
      <div className={cn(classes.imageWrapper)}>
        <Image
          src={imageForComponent}
          alt="Main Image"
          className={cn(classes.mainImage)}
          width={448}
          height={600}
        />
      </div>
      <div className={cn(classes.purpleBorder)}></div>
    </div>
  );
};
