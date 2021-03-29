import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { useQuery } from "react-query";
import { getMovie } from "../api/tmdb-api";

const MovieDetailsPage = () => {
  const {id} = useParams()
  const {  data, error, isLoading, isError }  = useQuery(['movie', { id: id}], getMovie)

  if (isLoading) {
    return <h1>Loading</h1>
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  // const [movie] = useMovie(id);
  return (
    <>
      {data ? (
        <>
          <PageTemplate movie={data}>
            <MovieDetails movie={data} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default (MovieDetailsPage);
