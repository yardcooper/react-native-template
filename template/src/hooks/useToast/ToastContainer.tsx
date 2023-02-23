import React, { forwardRef, useImperativeHandle, useState } from 'react';
import {
  StyleSheet,
  ViewStyle,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';

import { ToastOptions } from './types';
import Toast from '../../components/AppToast';
import { ToastProps } from '../../components/AppToast/types';

const { height, width } = Dimensions.get('window');

export interface ReferenceToastContainer {
  show: (message: string | JSX.Element, toastOptions?: ToastOptions) => void;
  update: (
    id: string,
    message: string | JSX.Element,
    toastOptions?: ToastOptions,
  ) => void;
  hide: (id: string) => void;
  hideAll: () => void;
  isOpen: (id: string) => void;
}

export interface ContainerProps extends ToastOptions {
  offset?: number;
  offsetTop?: number;
  offsetBottom?: number;
  swipeEnabled?: boolean;
}

const ToastContainer = forwardRef<ReferenceToastContainer, ContainerProps>(
  (props, ref) => {
    const [toasts, setToasts] = useState<ToastProps[]>([]);

    /**
     * Shows a new toast. Returns id
     */
    const show = (
      message: string | JSX.Element,
      toastOptions?: ToastOptions,
    ) => {
      const id = toastOptions?.id || Math.random().toString();
      const onDestroy = () => {
        toastOptions?.onClose && toastOptions?.onClose();
        setToasts([...toasts.filter((t) => t.id !== id)]);
      };

      requestAnimationFrame(() => {
        setToasts([
          {
            id,
            onDestroy,
            message,
            open: true,
            onHide: () => hide(id),
            ...props,
            ...toastOptions,
          },
          ...toasts.filter((t) => t.open),
        ]);
      });

      return id;
    };

    /**
     * Updates a toast, To use this create you must pass an id to show method first, then pass it here to update the toast.
     */
    const update = (
      id: string,
      message: string | JSX.Element,
      toastOptions?: ToastOptions,
    ) => {
      setToasts(
        toasts.map((toast) =>
          toast.id === id ? { ...toast, message, ...toastOptions } : toast,
        ),
      );
    };

    /**
     * Removes a toast from stack
     */
    const hide = (id: string) => {
      setToasts(toasts.map((t) => (t.id === id ? { ...t, open: false } : t)));
    };

    /**
     * Removes all toasts in stack
     */
    const hideAll = () => {
      setToasts(toasts.map((t) => ({ ...t, open: false })));
    };

    /**
     * Check if a toast is currently open
     */
    const isOpen = (id: string) => {
      return toasts.some((t) => t.id === id && t.open);
    };

    useImperativeHandle(ref, () => ({
      show,
      update,
      hide,
      hideAll,
      isOpen,
    }));

    const renderBottomToasts = () => {
      const { offset, offsetBottom } = props;
      const style: ViewStyle = {
        bottom: offsetBottom || offset,
        width,
        justifyContent: 'flex-end',
        flexDirection: 'column',
      };
      return (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'position' : undefined}
          style={[styles.container, style]}
          pointerEvents="box-none"
        >
          {toasts
            .filter((toast) => !toast.placement || toast.placement === 'bottom')
            .map((toast) => (
              <Toast key={toast.id} {...toast} />
            ))}
        </KeyboardAvoidingView>
      );
    };

    const renderTopToasts = () => {
      const { offset, offsetTop } = props;
      const style: ViewStyle = {
        top: offsetTop || offset,
        width,
        justifyContent: 'flex-start',
        flexDirection: 'column-reverse',
      };
      return (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'position' : undefined}
          style={[styles.container, style]}
          pointerEvents="box-none"
        >
          {toasts
            .filter((t) => t.placement === 'top')
            .map((toast) => (
              <Toast key={toast.id} {...toast} />
            ))}
        </KeyboardAvoidingView>
      );
    };

    const renderCenterToasts = () => {
      const { offset, offsetTop } = props;
      const style: ViewStyle = {
        top: offsetTop || offset,
        height,
        width,
        justifyContent: 'center',
        flexDirection: 'column-reverse',
      };

      const data = toasts.filter((t) => t.placement === 'center');
      const foundToast = data.length > 0;

      if (!foundToast) {
        return null;
      }

      return (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'position' : undefined}
          style={[styles.container, style]}
          pointerEvents="box-none"
        >
          {toasts
            .filter((t) => t.placement === 'center')
            .map((toast) => (
              <Toast key={toast.id} {...toast} />
            ))}
        </KeyboardAvoidingView>
      );
    };

    return (
      <>
        {renderTopToasts()}
        {renderBottomToasts()}
        {renderCenterToasts()}
      </>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 0,
    position: 'absolute',
    maxWidth: '100%',
    zIndex: 999999,
    elevation: 999999,
    alignSelf: 'center',
  },
});

export default ToastContainer;
