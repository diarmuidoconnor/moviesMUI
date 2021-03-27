import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import AddToWatchList from "../components/cardIcons/addToWatchList";
import { MoviesContext } from "../contexts/moviesContext";
import MustWatchTag from "../components/cardTag/mustWatchTag";

const UpcomingMovieListPage = () => {
  const context = useContext(MoviesContext);
  const { upcoming } = context;

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={upcoming}
      action={(movie) => {
        return (
          <>
            <AddToWatchList movie={movie} />
          </>
        );
      }}
      taging={(movie) => {
        return <MustWatchTag movie={movie} />;
      }}
    />
  );
};

export default UpcomingMovieListPage;
