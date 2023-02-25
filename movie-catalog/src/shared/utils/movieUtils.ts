import { Movie } from "../interfaces/movie";

export const getImagePath = (movie: Movie | undefined) => {
  return movie ? `${import.meta.env.VITE_IMAGE_BASE_URL}w500${movie.poster_path}` : null
}

export const getBackdropPath = (movie: Movie | undefined) => {
  return movie ? `${import.meta.env.VITE_IMAGE_BASE_URL}w500${movie.backdrop_path}` : null
}