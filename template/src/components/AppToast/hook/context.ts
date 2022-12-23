import React from 'react';

import ToastContainer from '../toast-container';

export type ToastContextType = Pick<
  ToastContainer,
  'show' | 'update' | 'hide' | 'hideAll'
>;

const ToastContext = React.createContext({} as ToastContextType);

export default ToastContext;
