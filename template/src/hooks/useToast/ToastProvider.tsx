import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';

import { ToastContext } from '.';
import ToastContainer, { ContainerProps } from './ToastContainer';

type Props = ContainerProps & {
  children: ReactElement;
};

const ToastProvider: FunctionComponent<Props> = ({ children }) => {
  const [refState, setRefState] = useState(null);
  const toastRef = useRef(null);

  useEffect(() => {
    setRefState(toastRef.current);
  }, []);

  return (
    <ToastContext.Provider value={refState}>
      {children}
      <ToastContainer ref={toastRef} />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
