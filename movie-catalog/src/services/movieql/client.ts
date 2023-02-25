import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from
} from '@apollo/client'
import { 
  onError
} from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context';

const errorLink = onError((error) => {
  const { graphQLErrors } = error
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      alert(`Graphql error: ${message}`)
    }) 
  }
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = import.meta.env.VITE_API_TOKEN || ''
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: import.meta.env.VITE_MOVIEQL_BASE_URL
  })
])

export const initializeMovieqlClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(link),
  })
}