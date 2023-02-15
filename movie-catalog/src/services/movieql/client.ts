import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from
} from '@apollo/client'
import { 
  onError
} from '@apollo/client/link/error'

const errorLink = onError((error) => {
  const { graphQLErrors } = error
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      alert(`Graphql error: ${message}`)
    }) 
  }
})

const link = from([
  errorLink,
  new HttpLink({
    uri: import.meta.env.VITE_MOVIEQL_BASE_URL
  })
])

export const initializeMovieqlClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: link
  })
}