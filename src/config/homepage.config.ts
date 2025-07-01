import type { HomepageConfig } from "@/types";

export const homepageConfig: HomepageConfig = {
  movieEndpoint: import.meta.env.VITE_API_BASE_URL + "/movies",
  heroMovieEndpoint: import.meta.env.VITE_API_BASE_URL + "/heroMovies",
  tvShowsEndpoint: import.meta.env.VITE_API_BASE_URL + "/tvshows",
} 