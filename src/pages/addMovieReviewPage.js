import React from "react";
import PageTemplate from "../components/templateMoviePage";
import useMovie from "../hooks/useMovie";

const WriteReviewPage = ({
  location: {
    state: { movieId },
  },
}) => {
  const [movie] = useMovie(movieId);

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <h3>Placeholder for web form</h3>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default WriteReviewPage;
