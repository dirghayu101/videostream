import type { RouteObject } from "react-router-dom";
import { Homepage, LoadingScreen } from "@/components/pages";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/loading",
    element:<LoadingScreen />,
  }
];
