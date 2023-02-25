import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import {
  ApolloProvider
} from '@apollo/client'
import { initializeMovieqlClient } from '../services/movieql/client'

const apolloClient = initializeMovieqlClient()

export default function Root() {
  return (
    <ApolloProvider client={apolloClient}>
      <Navbar />
      <div id="detail" className="p-4">
        <Outlet />
      </div>
    </ApolloProvider>
  );
}