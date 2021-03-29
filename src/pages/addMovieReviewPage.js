import React from "react";
import PageTemplate from "../components/templateMoviePage";
import useMovie from "../hooks/useMovie";
import ReviewForm from "../components/reviewForm";
import { useLocation } from 'react-router-dom'
const WriteReviewPage = () => {
  const { state: {movieId}} = useLocation()
  const [movie] = useMovie(movieId);
  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <ReviewForm movie={movie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default WriteReviewPage;
