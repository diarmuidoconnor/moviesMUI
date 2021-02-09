import React from "react";
import RateReviewIcon from "@material-ui/icons/RateReview";
import { Link } from "react-router-dom";

const WriteReviewIcon = ({ movie }) => {
  return (
    <Link
    to={{
      pathname: `/reviews/form`,
      state: {
        movie: movie,
      },
    }}
  >
    {<RateReviewIcon color="primary" fontSize="large" />}
  </Link>
    // <RateReviewIcon color="primary" fontSize="large" />
  );
};

export default  WriteReviewIcon;
