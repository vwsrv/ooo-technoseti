'use client';

import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';
import layoutClasses from './styles/layout.module.scss';

export const PageWrapper = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const className =
    pathname === '/'
      ? layoutClasses.pageWrapperFullWidth
      : layoutClasses.pageWrapper;
  return <div className={className}>{children}</div>;
};
