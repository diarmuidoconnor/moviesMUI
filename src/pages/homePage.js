import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getMovies } from "../api/tmdb-api";

const HomePage = (props) => {
  const [movies, setMovies] = useState([]);
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  // const [nameFilter, setNameFilter] = useState("");
  // const [genreFilter, setGenreFilter] = useState("0");

  // const genre = Number(genreFilter);

  // let displayedMovies = movies
  //   .filter((m) => {
  //     return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
  //   })
  //   .filter((m) => {
  //     return genre > 0 ? m.genre_ids.includes(Number(genreFilter)) : true;
  //   });

  // const handleChange = (type, value) => {
  //   if (type === "name") setNameFilter(value);
  //   else setGenreFilter(value);
  // };

  const addToFavorites = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favorite: true } : m
    );
    setMovies(updatedMovies);
  };
  useEffect(() => {
    getMovies().then(movies => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate
    title='Discover Movies'
    movies={movies}
    selectFavorite={addToFavorites}
  />
  //   <Grid container className={classes.root}>
  //     <Grid item xs={12}>
  //       <Header title={"Home Page"} />
  //     </Grid>
  //     <Grid item container spacing={5}>
  //       <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
  //         {/* <FilterCard /> */}
  //         <FilterCard
  //           onUserInput={handleChange}
  //           titleFilter={nameFilter}
  //           genreFilter={genreFilter}
  //         />
  //       </Grid>
  //       <MovieList movies={displayedMovies} selectFavorite={addToFavorites} />
  //     </Grid>
  //   </Grid>
  );
};
export default HomePage;
