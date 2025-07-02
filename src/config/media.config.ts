import type { MediaConfig, MediaDetailConfig } from "@/types";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const moviesEndpoint = baseUrl + "/movies";
const tvShowsEndpoint = baseUrl + "/tvshows";
const mediaDetailEndpoint = baseUrl;

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

export const mediaDetailConfig: MediaDetailConfig = {
    endpoint: mediaDetailEndpoint
}