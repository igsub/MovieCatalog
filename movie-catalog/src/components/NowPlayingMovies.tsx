import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_NOW_PLAYING_MOVIES } from '../services/movieql/queries'
import { Movie } from '../shared/interfaces/movie'
import HorizontalList from './core/HorizontalList'
import MovieCard from './MovieCard'
import DropdownsSimple, { IDropdownOption } from './core/Dropdown'

const NowPlayingMovies = () => {
  const [dropdownOptions, setDropdownOptions] = useState<IDropdownOption[]>([])
  const { data, loading } = useQuery<{ nowPlayingMovies: Movie[] }>(GET_NOW_PLAYING_MOVIES)
  const movieCards = data?.nowPlayingMovies.map(movie => <MovieCard key={`nowPlaying-${movie.id}`} movie={movie}/>)

  useEffect(() => {
    if (data) {
      const options: IDropdownOption[] = []
      data.nowPlayingMovies.forEach(movie => movie.genres?.forEach(genre => options.push({ label: genre.name, id: genre.id, active: false})))
      setDropdownOptions(options)
    }
  }, [data])

  const getGenres = (data: Movie[]) => {

  }

  return (
    <div>
      <h2 className='pl-2'>Latest Releases</h2>
      <div className='flex flex-row items-center gap-4'>
        <DropdownsSimple className='pl-2' options={dropdownOptions}/>   
      </div>
      {!loading ? <HorizontalList items={movieCards} className={""} /> : <></>}
    </div>
  )
}

export default NowPlayingMovies