import { gql } from '@apollo/client'

export const GET_POPULAR_MOVIES = gql`
  query {
    upcomingMovies{
      id
      imdb_id
      poster_path
      backdrop_path
      title
      overview
      release_date
      runtime
      vote_average
      production_companies {
        id
        name
        logo_path
        origin_country
      }
      videos {
        results {
          id
          iso
          key
          name
          site
          type
        }
      }
      genres {
        id
        name
      }
      credits {
        cast {
          id
          character
          name
          profile_path
        }
        crew{
          id
          name
          profile_path
          department
        }
      }
    }
  }
`