import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import AddToWatchList from "../components/cardIcons/addToWatchList";
import { useQuery } from "react-query";
import { getUpcomingMovies } from "../api/tmdb-api";
import Spinner from '../components/spinner'

const UpcomingMovieListPage = () => {
  const { data, error, isLoading, isError } = useQuery(
    "upcoming",
    getUpcomingMovies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const upcoming = data.results;
 
  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={upcoming}
      action={(movie) => {
        return (
          <>
            <AddToWatchList movie={movie} />
          </>
        );
      }}
    />
  );
};

export default UpcomingMovieListPage;
