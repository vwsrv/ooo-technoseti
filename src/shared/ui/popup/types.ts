import { ReactNode } from 'react';

export interface typePopupProps {
  isMounted: boolean;
  onClose: () => void;
  children: ReactNode | ((handleClose: () => void) => ReactNode);
}
