import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularIndeterminate() {
  return (
    <div sx={{
        display: 'flex',
        justifyContent: "center",
        '& > * + *': {
          marginLeft: '2em',
        }}}>
      <CircularProgress sx={{ backgroundColor: "#153f15ff"}}/>
      <CircularProgress sx={{ backgroundColor: "#63a863ff"}}/>
    </div>
  );
}
