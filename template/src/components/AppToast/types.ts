import { ToastOptions } from '../../hooks/useToast/types';

export interface ToastProps extends ToastOptions {
  id: string;
  onDestroy(): void;
  message: string | JSX.Element;
  open: boolean;
  onHide(): void;
}

export enum ToastType {
  DEFAULT = 'default',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
}

interface ToastColorSet {
  backgroundColor: string;
  textColor: string;
  borderColor?: string;
}

export const ToastColors: Record<ToastType, ToastColorSet> = {
  [ToastType.DEFAULT]: {
    backgroundColor: '#333',
    borderColor: '#d3d3d3',
    textColor: 'white',
  },
  [ToastType.SUCCESS]: {
    backgroundColor: 'rgb(46, 125, 50)',
    textColor: 'white',
  },
  [ToastType.WARNING]: {
    backgroundColor: 'rgb(237, 108, 2)',
    textColor: 'white',
  },
  [ToastType.DANGER]: {
    backgroundColor: 'rgb(211, 47, 47)',
    textColor: 'white',
  },
};

export const ToastIcons: Record<ToastType, JSX.Element | undefined> = {
  [ToastType.DEFAULT]: undefined,
  [ToastType.SUCCESS]: undefined,
  [ToastType.WARNING]: undefined,
  [ToastType.DANGER]: undefined,
};
