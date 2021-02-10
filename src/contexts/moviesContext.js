import React, { useReducer, useEffect } from "react";
import { getMovies } from "../api/tmdb-api";

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        // upcoming: [...state.upcoming],
      };
    case "remove-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: false } : m
        ),
        // upcoming: [...state.upcoming],
      };
    case "load-discover-movies":
      return {
        movies: action.payload.movies,
        // upcoming: [...state.upcoming]
      };
    // case "load-upcoming":
    //   return { upcoming: action.payload.movies, movies: [...state.movies] };
    // case "add-review":
    //   return {
    //     movies: state.movies.map((m) =>
    //       m.id === action.payload.movie.id
    //         ? { ...m, review: action.payload.review }
    //         : m
    //     ),
    //     upcoming: [...state.upcoming],
    //   };
    default:
      return state;
  }
};

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  // const [movies, setMovies] = useState([]);
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  // const addToFavorites = (movieId) => {
  //   setMovies((movies) => {
  //     const updatedMovies = movies.map((m) =>
  //       m.id === movieId ? { ...m, favorite: true } : m
  //     );
  //     return updatedMovies;
  //   });
  // };

  const removeFromFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({
      type: "remove-favorite",
      payload: { movie: state.movies[index] },
    });

    // setMovies((movies) => {
    //   const updatedMovies = movies.map((m) =>
    //     m.id === movieId ? { ...m, favorite: false } : m
    //   );
    //   return updatedMovies;
    // });
  };

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load-discover-movies", payload: { movies } });

      // setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        addToFavorites: addToFavorites,
        removeFromFavorites: removeFromFavorites,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
