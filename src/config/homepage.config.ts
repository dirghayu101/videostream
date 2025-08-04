import type { HomepageConfig } from "@/types";

export const homepageConfig: HomepageConfig = {
  movieEndpoint: import.meta.env.VITE_API_BASE_URL + "/media/movies/featured",
  heroMovieEndpoint: import.meta.env.VITE_API_BASE_URL + "/media/movies",
  tvShowsEndpoint: import.meta.env.VITE_API_BASE_URL + "/media/tvshows/featured",
} as const;