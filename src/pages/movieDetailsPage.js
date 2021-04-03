import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { useQuery } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'

const MovieDetailsPage = () => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  // const [movie] = useMovie(id);
  return (
    <PageTemplate movie={movie}>
      <MovieDetails movie={movie} />
    </PageTemplate>
  );
};

export default MovieDetailsPage;
