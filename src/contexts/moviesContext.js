import React, { useReducer } from "react";
import FavoriteTag from "../components/cardTag/favoriteTag";

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        taggedMovies: {
          favorites: [...state.taggedMovies.favorites, action.payload.movie.id],
          mustWatch: [...state.taggedMovies.mustWatch],
        },
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
      };
    case "remove-favorite":
      return {
        taggedMovies: {
          favorites: state.taggedMovies.favorites.filter(
            (mId) => mId !== action.payload.movie.id
          ),
          mustWatch: [...state.taggedMovies.mustWatch],
        },
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
  const [state, dispatch] = useReducer(reducer, {
    movies: [],
    upcoming: [],
    taggedMovies: { favorites: [], mustWatch: [] },
  });

  const getMovieTag = (movie) => {
    if (state.taggedMovies.favorites.find((e) => e === movie.id)) {
      return <FavoriteTag />;
    } else if (state.taggedMovies.mustWatch.find((e) => e === movie.id))
      return "mustWatch";
    else return undefined;
  };
  const addToFavorites = (movie) => {
    dispatch({ type: "add-favorite", payload: { movie: movie } });
  };

  const removeFromFavorites = (movie) => {
    dispatch({
      type: "remove-favorite",
      payload: { movie: movie },
    });
  };

  const addToWatchList = (movie) => {
    dispatch({ type: "add-to-watch-list", payload: { movie: movie } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  return (
    <MoviesContext.Provider
      value={{
        taggedMovies: state.taggedMovies,
        upcoming: state.upcoming,
        getMovieTag: getMovieTag,
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
