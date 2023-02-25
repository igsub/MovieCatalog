import { createContext, useState } from "react";
import { Movie } from "../../shared/interfaces/movie";

interface ISessionContext {
  favoriteMovies: Movie[]
  addFavoriteMovie: ((movie: Movie | undefined) => void) | null
  removeFavoriteMovie: ((id: number | undefined) => void) | null
  isMovieInFavorites: ((movie: Movie) => boolean) | null
}

const defaultValues = {
  favoriteMovies: [],
  addFavoriteMovie: null,
  removeFavoriteMovie: null,
  isMovieInFavorites: null
} as ISessionContext

export const SessionContext = createContext<ISessionContext>(defaultValues)

export const SessionProvider = ({ children }: any) => {
  const [favorites, setFavorites] = useState<Movie[]>([])

  const addMovie = (movie: Movie | undefined) => {
    if (movie !== undefined) {
      const idx = favorites.findIndex(fav => fav.id === movie.id)
      if (idx === -1) setFavorites(prevFavorites => [...prevFavorites, movie])
    }
  }

  const removeMovie = (id: number | undefined) => {
    if (id !== undefined) {
      const newFavorites = favorites.filter(fav => fav.id !== id)
      setFavorites(newFavorites)
    }
  }

  const isMovieInFavorites = (movie: Movie) => {
    return movie ? favorites.findIndex(fav => fav.id === movie.id) !== -1 : false
  }

  const value = {
    favoriteMovies: favorites,
    addFavoriteMovie: addMovie,
    removeFavoriteMovie: removeMovie,
    isMovieInFavorites: isMovieInFavorites
  }

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  )
}