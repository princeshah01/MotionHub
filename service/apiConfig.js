import axios from "axios"

export const IMAGE_BASE_URL = "";

const TMDB_CONFIG = {
    BASE_URL: "https://api.themoviedb.org/3/",
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
}

const api = axios.create({
    baseURL: TMDB_CONFIG.BASE_URL,
    timeout: 10000,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TMDB_CONFIG.API_KEY}`
    }
})

export const request = async (options) => {
    try {
        const response = await api(options);
        return response.data;
    } catch (error) {
        return error?.response || { success: false, message: error.message || "Unknown Error" };
    }
};

// https://api.themoviedb.org/3/discover/movie