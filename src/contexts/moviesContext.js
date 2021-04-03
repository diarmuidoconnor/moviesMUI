import React, { useState } from "react";
import FavoriteTag from "../components/cardTag/favoriteTag";
import MustWatchTag from '../components/cardTag/mustWatchTag'

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "add-favorite":
//       return {
//         taggedMovies: {
//           favorites: [...state.taggedMovies.favorites, action.payload.movie.id],
//           mustWatch: [...state.taggedMovies.mustWatch],
//         },
//         movies: state.movies.map((m) =>
//           m.id === action.payload.movie.id ? { ...m, favorite: true } : m
//         ),
//         upcoming: [...state.upcoming],
//       };
//     case "remove-favorite":
//       return {
//         taggedMovies: {
//           favorites: state.taggedMovies.favorites.filter(
//             (mId) => mId !== action.payload.movie.id
//           ),
//           mustWatch: [...state.taggedMovies.mustWatch],
//         },
//         movies: state.movies.map((m) =>
//           m.id === action.payload.movie.id ? { ...m, favorite: false } : m
//         ),
//         upcoming: [...state.upcoming],
//       };
//     case "load-discover-movies":
//       return {
//         movies: action.payload.movies,
//         upcoming: [...state.upcoming],
//       };
//     case "load-upcoming":
//       return { upcoming: action.payload.movies, movies: [...state.movies] };
//     case "add-review":
//       return {
//         movies: state.movies.map((m) =>
//           m.id === action.payload.movie.id
//             ? { ...m, review: action.payload.review }
//             : m
//         ),
//         upcoming: [...state.upcoming],
//       };
//     case "add-to-watch-list":
//       return {
//         taggedMovies: {
//           mustWatch: [...state.taggedMovies.mustWatch, action.payload.movie.id],
//           favorites: [...state.taggedMovies.favorites],
//         },
//         upcoming: state.upcoming.map((m) =>
//           m.id === action.payload.movieId ? { ...m, mustWatch: true } : m
//         ),
//         movies: [...state.movies],
//       };
//     default:
//       return state;
//   }
// };

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [mustWatch, setMustWatch] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} )

  // const [state, dispatch] = useReducer(reducer, {
  //   movies: [],
  //   upcoming: [],
  //   taggedMovies: { favorites: [], mustWatch: [] },
  // });

  const getMovieTag = (movie) => {
    if (favorites.find((id) => id === movie.id)) {
      return <FavoriteTag />;
    } else if (mustWatch.find((id) => id === movie.id))
      return <MustWatchTag />;
    else return null;
  };
  const addToFavorites = (movie) => {
    setFavorites([...favorites,movie.id])

  };

  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addToWatchList = (movie) => {
    setMustWatch([...mustWatch, movie.id])
  };

  const addReview = (movie, review) => {
    // dispatch({ type: "add-review", payload: { movie, review } });
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        mustWatch,
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
