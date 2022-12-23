import { useContext } from 'react';

import ToastContext, { ToastContextType } from './context';

const useToast = (): ToastContextType => useContext(ToastContext);

export default useToast;
