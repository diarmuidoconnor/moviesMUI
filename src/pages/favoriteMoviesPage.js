import React from "react";
import PageTemplate from "../components/templateMovieListPage";
const FavoriteMoviesPage = () => {
  const toDo = () => true;

  const movies = JSON.parse(localStorage.getItem("favorites"));
  console.log(movies[0]);

  return (
    <PageTemplate
      title="Favorite Movies"
      movies={movies}
      selectFavorite={toDo}
    />
  );
};

export default FavoriteMoviesPage;
