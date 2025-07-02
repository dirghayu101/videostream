import type { RouteObject } from "react-router-dom";
import { Homepage, MediaPage } from "@/components/pages";
import { moviesConfig, tvShowsConfig, homepageConfig, mediaDetailConfig } from "@/config";
import { MediaDetailPage } from "@/components/pages/MediaDetailPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Homepage {...homepageConfig} />,
  },
  {
    path: "/movies",
    element: <MediaPage {...moviesConfig} />,
  },
  {
    path: "/tvshows",
    element: <MediaPage {...tvShowsConfig} />,
  },
  {
    path: "/:type/:id",
    element: <MediaDetailPage {...mediaDetailConfig} />,
  }
];
