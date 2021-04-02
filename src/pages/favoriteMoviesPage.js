import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import RemoveFromFavorites from "../components/cardIcons/removeFromfavorites";
import WriteReview from "../components/cardIcons/writeReview";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";

const FavoriteMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movieIds = context.taggedMovies.favorites;
  const favoriteMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["favorite", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  const isLoading = favoriteMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  const favoriteMovies = favoriteMovieQueries.map((q) => q.data);

  return (
    <PageTemplate
      title="Favorite Movies"
      movies={favoriteMovies}
      action={(movie) => {
        return (
          <>
            <RemoveFromFavorites movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default FavoriteMoviesPage;
