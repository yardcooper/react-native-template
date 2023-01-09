import { StyleProp, TextStyle, ViewStyle } from 'react-native';

import { AppTextType } from '../AppText';

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

export interface ToastOptions {
  /**
   * Id is optional, you may provide an id only if you want to update toast later using toast.update()
   */
  id?: string;

  /**
   * Customize toast icon, overrides type icon
   */
  customIcon?: JSX.Element;

  /**
   * Toast types
   */
  type?: ToastType;

  /**
   * In ms, How long toast will stay before it go away in ms (default 3s)
   */
  duration?: number;

  /**
   * Customize when toast should be placed
   */
  placement?: 'top' | 'bottom' | 'center';

  /**
   * Customize style of toast
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Customize app text type, default is used from AppText
   */
  textType?: AppTextType;

  /**
   * Customize style of toast text
   */
  textStyle?: StyleProp<TextStyle>;

  /**
   * Customize how fast toast will show and hide in ms (default 250ms)
   */
  animationDuration?: number;

  /**
   * Customize how toast is animated when added or removed
   */
  animationType?: 'slide-in' | 'zoom-in';

  /**
   * Register event for when toast is pressed. If you're using a custom toast you have to pass this to a Touchable.
   */
  onPress?(id: string): void;

  /**
   * Execute event after toast is closed
   */
  onClose?(): void;

  /**
   * Payload data for custom toasts. You can pass whatever you want
   */
  data?: any;

  swipeEnabled?: boolean;
}
