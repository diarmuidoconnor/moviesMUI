import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import FavoriteTag from "../components/cardTag/favoriteTag";

const HomePage = (props) => {
  const context = useContext(MoviesContext);
  const { movies } = context;

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
