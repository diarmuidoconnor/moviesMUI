import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import AddToWatchList from "../components/cardIcons/addToWatchList";
import MustWatchTag from "../components/cardTag/mustWatchTag";
import { useQuery } from "react-query";
import { getUpcomingMovies } from "../api/tmdb-api";

const UpcomingMovieListPage = () => {
  const { data, error, isLoading, isError } = useQuery(
    "upcoming",
    getUpcomingMovies
  );

  if (isLoading) {
    return <h1>Loading</h1>;
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
      taging={(movie) => {
        return <MustWatchTag movie={movie} />;
      }}
    />
  );
};

export default UpcomingMovieListPage;
