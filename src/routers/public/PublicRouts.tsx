import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Spinner } from "components";
import { ErrorBoundary } from "services/error";

const SignIn = lazy(() => import("pages/signIn/SignIn"));
const NotFound = lazy(() => import("pages/404/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <SignIn />,
      },
    ],
    errorElement: <ErrorBoundary />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const PublicRouts = () => {
  return <RouterProvider router={router} fallbackElement={<Spinner />} />;
};

export default PublicRouts;
