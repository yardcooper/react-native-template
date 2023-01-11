import React, { FunctionComponent, useEffect, useRef, useState } from 'react';

import { ToastContext } from '.';
import ToastContainer, { ContainerProps } from './ToastContainer';

type PropsWithChildren = ContainerProps & {
  children: React.ReactNode;
};

const ToastProvider: FunctionComponent<PropsWithChildren> = ({
  children,
  ...props
}) => {
  const toastRef = useRef(null);
  const [refState, setRefState] = useState({});

  useEffect(() => {
    setRefState(toastRef.current as any);
  }, []);

  return (
    <ToastContext.Provider value={refState as any}>
      {children}
      <ToastContainer ref={toastRef} {...props} />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
