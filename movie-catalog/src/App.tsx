import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {
  ApolloProvider
} from '@apollo/client'
import { initializeMovieqlClient } from './services/movieql/client'
import Movie from './components/Movie'

const apolloClient = initializeMovieqlClient()

function App() {
  const [count, setCount] = useState(0)

  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <Movie></Movie>
      <div>
        <a className='text-3xl mt-96' href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
    </ApolloProvider>
  )
}

export default App
