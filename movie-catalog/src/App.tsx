import './App.css'
import {
  ApolloProvider
} from '@apollo/client'
import { initializeMovieqlClient } from './services/movieql/client'
import Navbar from './components/layout/Navbar'

const apolloClient = initializeMovieqlClient()

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Navbar />
    </ApolloProvider>
  )
}

export default App
