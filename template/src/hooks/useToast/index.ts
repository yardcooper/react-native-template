import React, { useContext } from 'react';

import { ReferenceToastContainer } from '../../components/AppToast/ToastContainer';
export { default as ToastProvider } from './provider';

export const ToastContext = React.createContext({} as ReferenceToastContainer);

const useToast = (): ReferenceToastContainer => useContext(ToastContext);

export default useToast;
