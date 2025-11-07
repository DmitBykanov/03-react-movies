import axios from "axios";
import type { Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";
const VITE_TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

async function fetchMovies(query: string): Promise<Movie[]> {
  if (!query.trim()) return [];

  try {
    const response = await axios.get(BASE_URL, {
      params: { query },
      headers: {
        Authorization: `Bearer ${VITE_TMDB_TOKEN}`,
      },
    });

    return response.data?.results ?? [];
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    throw error;
  }
}
export default fetchMovies;
