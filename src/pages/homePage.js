import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import FavoriteTag from "../components/cardTag/favoriteTag";
import { useQuery } from 'react-query'
import { getMovies } from "../api/tmdb-api";
import Spinner from '../components/spinner'

const HomePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discover', getMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />;
      }}
      taging={(movie) => {
        return <FavoriteTag movie={movie} />;
      }}
    />
  );
};

export default HomePage;
