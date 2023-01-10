import { StyleProp, TextStyle, ViewStyle } from 'react-native';

import { AppTextType } from '../../components/AppText';
import { ToastType } from '../../components/AppToast/types';

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
