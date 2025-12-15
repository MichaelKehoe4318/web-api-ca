import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddToWatchListIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchList = (e) => {
    e.preventDefault();
     console.log(`Add to watch list: ${movie.title}`);
     context.addMustWatch(movie);
  };

  return (
    <IconButton aria-label="add to watchlist" onClick={handleAddToWatchList}>
      <PlaylistAddIcon sx={{color: "#023316ff"}} fontSize="large" />
    </IconButton>
  );
};

export default AddToWatchListIcon;
