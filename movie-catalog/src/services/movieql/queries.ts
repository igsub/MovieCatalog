import { gql } from '@apollo/client'

export const GET_UPCOMING_MOVIES = gql`
  query {
    upcomingMovies {
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

export const GET_NOW_PLAYING_MOVIES = gql`
  query {
    nowPlayingMovies {
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

export const GET_MOVIE_DETAILS = gql`
  query GetMovieDetails($id: Int!) {
    movieDetail(id: $id) {
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

export const SEARCH_MOVIE = gql`
  query SearchMovie($term: String!){
    searchMovie(term: $term) {
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