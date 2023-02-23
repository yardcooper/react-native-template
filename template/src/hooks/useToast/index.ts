import React, { useContext } from 'react';

import { ReferenceToastContainer } from './ToastContainer';
export { default as ToastProvider } from './ToastProvider';

export const ToastContext = React.createContext<ReferenceToastContainer | null>(
  null,
);

const useToast = () => {
  const context = useContext(ToastContext);

  const initializationWarning = () => {
    console.warn(
      'Toast is not initialized. Please check ToastProvider is correctly configured.',
    );
  };

  if (!context) {
    return {
      show: initializationWarning,
      update: initializationWarning,
      hide: initializationWarning,
      hideAll: initializationWarning,
      isOpen: initializationWarning,
    };
  }

  return context;
};

export default useToast;
