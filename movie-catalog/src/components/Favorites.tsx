import React, { useContext } from 'react'
import { SessionContext } from '../services/context/SessionContext'
import HorizontalList from './core/HorizontalList'
import MovieCard from './MovieCard'

const Favorites = () => {
  const { favoriteMovies } = useContext(SessionContext)
  const favoriteMoviesCards = favoriteMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)

  return (
    <div className='flex flex-col justify-center items-center'>
      { favoriteMovies.length ? <HorizontalList items={favoriteMoviesCards} className=''/> : "You don't have favorite movies yet" }
    </div>
  )
}

export default Favorites