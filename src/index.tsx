import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./i18n";
import "./index.css";

import App from "./App";
import { Spinner } from "components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner minHeight="100vh" />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
