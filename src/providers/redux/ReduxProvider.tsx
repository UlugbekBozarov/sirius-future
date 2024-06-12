import React, { ReactNode } from "react";

interface ReduxProviderProps {
  children?: ReactNode;
}

const ReduxProvider = ({ children }: ReduxProviderProps) => {
  return <div>ReduxProvider</div>;
};

export default ReduxProvider;
