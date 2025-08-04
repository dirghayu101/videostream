export const layoutConfig = {
    registerEndpoint: import.meta.env.VITE_API_BASE_URL + "/users/register",
    loginEndpoint: import.meta.env.VITE_API_BASE_URL + "/auth/login",
    searchEndpoint: import.meta.env.VITE_API_BASE_URL + "/media"
} as const;
