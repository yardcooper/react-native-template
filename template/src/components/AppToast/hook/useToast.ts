import { useContext } from 'react';

import { ReferenceToastContainer } from '../toast-container';
import ToastContext from './context';

const useToast = (): ReferenceToastContainer => useContext(ToastContext);

export default useToast;
