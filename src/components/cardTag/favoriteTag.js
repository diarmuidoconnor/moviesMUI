import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

const FavoritesTag = ({ movie }) => {
  const classes = useStyles();

  return  (
    <Avatar className={classes.avatar}>
      <FavoriteIcon />
    </Avatar>
  ) 
};

export default FavoritesTag;
