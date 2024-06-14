import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Spinner } from "components";
import { ErrorBoundary } from "services/error";
import { lazy } from "react";

const Layout = lazy(() => import("layout/Layout"));

const Home = lazy(() => import("pages/home/Home"));
const Schedule = lazy(() => import("pages/schedule/Schedule"));

const NotFound = lazy(() => import("pages/404/NotFound"));

// const routers = ;

const PrivateRouts = () => {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "schedule",
              element: <Schedule />,
            },
            {
              path: "*",
              element: <NotFound height="calc(100vh - 100px)" />,
            },
          ],
          errorElement: <ErrorBoundary />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ])}
      fallbackElement={<Spinner />}
    />
  );
};

export default PrivateRouts;
