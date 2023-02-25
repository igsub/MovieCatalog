import { useLazyQuery, useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { SEARCH_MOVIE } from '../services/movieql/queries'
import { Movie } from '../shared/interfaces/movie'
import HorizontalList from './core/HorizontalList'
import MovieCard from './MovieCard'

const SearchMoviesList = () => {
  const defaultSearchValue = ""
  const [searchText, setSearchText] = useState(defaultSearchValue)
  const { data, loading, error, refetch } = useQuery<{ searchMovie: Movie[] }>(SEARCH_MOVIE)
  if (error) return <>Error</>
  let movieCards = data?.searchMovie.map(movie => <MovieCard key={`searchMovies-${movie.id}`} movie={movie} />)
  
  useEffect(() => {
    const debounceSearch = setTimeout(() => {
      console.log(searchText)
      refetch({ term: searchText || defaultSearchValue })
    }, 500)

    return () => clearTimeout(debounceSearch)
  }, [searchText])

  return (
      <div className='w-full'>
        <div className='flex flex-col justify-start w-full'>
          <h2 className='pl-2'>Search Movies</h2>
          <div className='w-96'>
            <input onChange={e => setSearchText(e.target.value)} className="w-full block border border-gray-200 rounded px-3 py-2 leading-6 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="name" placeholder="Search" /> 
          </div>
          {data && <HorizontalList items={movieCards} />} 
        </div>
      </div>
  )
}

export default SearchMoviesList