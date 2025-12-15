import React from "react";
import Typography from "@mui/material/Typography";

const MovieReview =  ({ review }) => {
  return (
    <>
      <Typography variant="h5" component="h3" sx={{ backgroundColor: "#1c481cff"}}>
        Review By: {review.author}
      </Typography>

      <Typography variant="h6" component="p" sx={{ backgroundColor: "#185418ff"}}>
        {review.content} 
      </Typography>
    </>
  );
};
export default MovieReview
