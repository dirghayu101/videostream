import type { MediaConfig } from "@/types";

const moviesEndpoint = import.meta.env.VITE_API_BASE_URL + "/movies";
const tvShowsEndpoint = import.meta.env.VITE_API_BASE_URL + "/tvshows";

export const moviesConfig: MediaConfig = {
    type: "movies",
    title: "Movies",
    endpoint: moviesEndpoint,
}

export const tvShowsConfig: MediaConfig = {
    type: "tvshows",
    title: "TV Shows",
    endpoint: tvShowsEndpoint,
}