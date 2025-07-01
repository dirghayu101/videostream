import type { RouteObject } from "react-router-dom";
import { Homepage, LoadingScreen, MediaPage } from "@/components/pages";
import { moviesConfig, tvShowsConfig, homepageConfig } from "@/config";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Homepage {...homepageConfig} />,
  },
  {
    path: "/loading",
    element:<LoadingScreen />,
  },
  {
    path: "/movies",
    element: <MediaPage {...moviesConfig} />,
  },
  {
    path: "/tvshows",
    element: <MediaPage {...tvShowsConfig} />,
  }
];
