import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";

const HomePage = (props) => {
  const context = useContext(MoviesContext);
  const { movies, addToFavorites } = context;
  // const [movies, setMovies] = useState([]);
  // const favorites = movies.filter(m => m.favorite)
  // localStorage.setItem('favorites', JSON.stringify(favorites))

  // const addToFavorites = (movieId) => {
  //   const updatedMovies = movies.map((m) =>
  //     m.id === movieId ? { ...m, favorite: true } : m
  //   );
  //   setMovies(updatedMovies);
  // };
  // useEffect(() => {
  //   getMovies().then(movies => {
  //     setMovies(movies);
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      selectFavorite={addToFavorites}
    />
  );
};

export default HomePage;
