import { ReactNode } from "react";
import { Provider } from "react-redux";

import { store } from "./features/store";

interface ReduxProviderProps {
  children?: ReactNode;
}

const ReduxProvider = ({ children }: ReduxProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
