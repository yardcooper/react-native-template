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
