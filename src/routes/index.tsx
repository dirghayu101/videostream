import type { RouteObject } from "react-router-dom";
import { Homepage } from "@/components/pages";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Homepage />,
  },
];
