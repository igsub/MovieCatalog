import { Company } from "./company"
import { Credits } from "./credits"
import { Genres } from "./genres"
import { VideoResults } from "./videoResults"

export interface Movie {
  id: number
  imdb_id?: string
  poster_path?: string
  backdrop_path?: string
  title: string
  overview?: string
  release_date?: string
  runtime?: number
  vote_average: number
  production_companies: Company[]
  videos: VideoResults
  genres: Genres[]
  credits: Credits
}
