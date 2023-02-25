import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { GET_MOVIE_DETAILS } from '../services/movieql/queries'
import { Movie } from '../shared/interfaces/movie'
import { getImagePath } from '../shared/utils/movieUtils'
import ImbdLogo from '../assets/imdb.png'
import HorizontalList from './core/HorizontalList'
import CrewCard from './CrewCard'
import CastCard from './CastCard'
import { useContext, useEffect, useState } from 'react'
import HeartIcon from '../assets/icons/heart'
import { SessionContext } from '../services/context/SessionContext'

const MovieDetail = () => {
  const { id } = useParams()
  const { data, loading, refetch } = useQuery<{ movieDetail: Movie }>(GET_MOVIE_DETAILS)
  const [selectedMovie, setSelectedMovie] = useState<Movie>()
  const [isFavorite, setIsFavorite] = useState(false)

  const { isMovieInFavorites, addFavoriteMovie, removeFavoriteMovie } = useContext(SessionContext)

  const crewCards = selectedMovie?.credits?.crew.map(c => <CrewCard key={c.id} crew={c} />) || []
  const castCards = selectedMovie?.credits?.cast.map(c => <CastCard key={c.id} cast={c} />) || []

  useEffect(() => {
    const movie = data?.movieDetail
    if (movie) {
      setSelectedMovie(movie)
      setIsFavorite(isMovieInFavorites ? isMovieInFavorites(movie) : false)
    }
  }, [data])

  useEffect(() => {
    refetch({
      id: parseInt(id || "")
    })
  }, [id])
  
  const onFavoriteClick = () => {
    if (isFavorite) {
      if (removeFavoriteMovie) removeFavoriteMovie(selectedMovie?.id)
    }
    else {
      if (addFavoriteMovie) addFavoriteMovie(selectedMovie)
    }
    setIsFavorite(prevValue => !prevValue)
  }

  return (
    <div className='flex flex-col'>

      <div className='flex justify-center w-full flex-row space-x-4 sm:flex-col sm:justify-center md:flex-row shadow-md p-4 bg-gray-200'>
        <div className='flex justify-start'>
          <img className='sm:h-46 h-96' src={getImagePath(data?.movieDetail) ?? '../assets/default-movie-image.png'} alt={data?.movieDetail.title}/>
        </div>
        <div className='flex flex-col max-w-2xl gap-4'>
          <h1>{selectedMovie?.title}</h1>
          <h3>{selectedMovie?.release_date}</h3>
          <p>{selectedMovie?.overview}</p>
          <div className='flex flex-row gap-4'>
            {selectedMovie?.genres?.map((genre) => (
              <div className='rounded-3xl bg-gray-300 w-fit px-4 py-1' key={genre.id}>#{genre.name}</div>
            ))}
          </div>
          <a className="w-fit" href={`${import.meta.env.VITE_IMBD_BASE_URL}${selectedMovie?.imdb_id}`}>
            <img className='h-12 w-12' src={ImbdLogo} alt='imdb' />
          </a>
        </div>
        <div onClick={() => onFavoriteClick()}>
          <HeartIcon size={40} border={isFavorite ? 0 : 1} color={isFavorite ? "#f55a5a" : "none"} className="hover:cursor-pointer"/>
        </div>
      </div>

      <div className='flex flex-row justify-center items-center'>
          {selectedMovie?.production_companies?.map((company) => (
            <div className='flex w-48 h-full m-8' key={company.id}>
              {company.logo_path ? <img className='w-full h-full object-cover' src={`${import.meta.env.VITE_IMAGE_BASE_URL}w500${company.logo_path}`}/> : company.name}
            </div>
          ))}
      </div>

      <div className='flex flex-col justify-center items-center'>
        <HorizontalList items={castCards} className=''/>
        <HorizontalList items={crewCards} className=''/>
      </div>
    </div>
  )
}

export default MovieDetail