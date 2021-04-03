import React from "react";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

const MustWatchTag = ({ movie }) => {
  const classes = useStyles();

  return  (
    <Avatar className={classes.avatar}>
      <PlaylistAddCheckIcon />
    </Avatar>
  );
};

export default MustWatchTag;
