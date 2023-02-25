import { useQuery } from '@apollo/client'
import { useState } from 'react'
import HorizontalList from '../components/core/HorizontalList'
import MovieCard from '../components/MovieCard'
import NowPlayingMovies from '../components/NowPlayingMovies'
import SearchMoviesList from '../components/SearchMoviesList'
import { GET_UPCOMING_MOVIES } from '../services/movieql/queries'
import { Movie } from '../shared/interfaces/movie'

const Home = () => {
  const { data, loading } = useQuery<{ upcomingMovies: Movie[] }>(GET_UPCOMING_MOVIES)
  const [dropdownOptions, setDropdownOptions] = useState([])

  const upcomingMovies = data?.upcomingMovies.map(movie => <MovieCard key={`card-${movie.id}`} movie={movie} />)


  return (
    <div className='flex flex-col justify-center'>
      <div className='flex w-full justify-center flex-col items-center'>
        {!loading && <HorizontalList items={upcomingMovies} className={""} />}
      </div>
      <div className='flex justify-center flex-col items-center'>
        <NowPlayingMovies />
      </div>
      <div className='flex w-full justify-center flex-col items-center'>
        <SearchMoviesList />
      </div>
    </div>
  )
}

export default Home