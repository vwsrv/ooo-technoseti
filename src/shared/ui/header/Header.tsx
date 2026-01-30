'use client';

import { FC } from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';
import Image from 'next/image';
import { typeHeaderProps } from './types';
import { useRouter } from 'next/navigation';

export const Header: FC<typeHeaderProps> = ({
  headerLogo,
  children,
  headerAlt,
  style,
}) => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push('/');
  };

  return (
    <header className={cn(classes.header)} style={{ ...style }}>
      <div className={cn(classes.imageContainer)}>
        <Image
          src={headerLogo}
          fill={true}
          objectFit="contain"
          alt={headerAlt}
          onClick={() => handleNavigate()}
        />
      </div>
      {children}
    </header>
  );
};
