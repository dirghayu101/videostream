export const layoutConfig = {
    registerEndpoint: import.meta.env.VITE_API_BASE_URL + "/users/register",
    loginEndpoint: import.meta.env.VITE_API_BASE_URL + "/auth/login",
    userProfileEndpoint: import.meta.env.VITE_API_BASE_URL + "/users/email",
    searchEndpoint: import.meta.env.VITE_API_BASE_URL + "/media"
} as const;
