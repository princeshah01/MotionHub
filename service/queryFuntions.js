import { request } from "./apiConfig";

export const fetchMovies = (query) => request({ url: query ? `search/movie?query=${encodeURIComponent(query)}` : "discover/movie?sort_by=popularity.desc", method: 'GET' })

// export const  = () => 