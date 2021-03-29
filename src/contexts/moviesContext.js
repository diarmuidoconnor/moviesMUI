import React, { useReducer, useEffect } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
      };
    case "remove-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: false } : m
        ),
        upcoming: [...state.upcoming],
      };
    case "load-discover-movies":
      return {
        movies: action.payload.movies,
        upcoming: [...state.upcoming],
      };
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies] };
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
      };
    case "add-to-watch-list":
      return {
        upcoming: state.upcoming.map((m) =>
          m.id === action.payload.movieId ? { ...m, mustWatch: true } : m
        ),
        movies: [...state.movies],
      };
    default:
      return state;
  }
};

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const removeFromFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({
      type: "remove-favorite",
      payload: { movie: state.movies[index] },
    });
  };

  const addToWatchList = (movieId) => {
    dispatch({ type: "add-to-watch-list", payload: { movieId } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  // useEffect(() => {
  //   getMovies().then((movies) => {
  //     dispatch({ type: "load-discover-movies", payload: { movies } });
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  //   getUpcomingMovies().then((movies) => {
  //     dispatch({ type: "load-upcoming", payload: { movies } });
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        addToFavorites: addToFavorites,
        addToWatchList,
        removeFromFavorites: removeFromFavorites,
        addReview: addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
