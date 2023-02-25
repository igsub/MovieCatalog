import { Link } from "react-router-dom"
import { Movie } from "../shared/interfaces/movie"

interface IMovieCard {
  movie: Movie
}

const MovieCard = ({ movie }: IMovieCard) => {
  const imgPath = `${import.meta.env.VITE_IMAGE_BASE_URL}w500${movie.poster_path}`
  return (
    <div className="h-96 w-44 p-1 m-1 max-w-sm rounded overflow-hidden shadow-md transform transition duration-300 hover:scale-105 bg-white">
      <Link to={`/movie/${movie.id}`}>
        <img className="w-44" src={imgPath} alt={movie.title} />
      </Link>
      <div>
        <div className="px-2 py-2">
          <div className="font-bold text-md mb-2">{movie.title}</div>
          <p className="text-gray-700 text-sm">
            {movie.overview}
          </p>
        </div>
        <div className="px-2 py-2">
          {movie.genres?.map(g => (
            <span key={g.id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {g.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieCard