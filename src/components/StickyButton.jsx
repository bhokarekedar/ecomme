import React from 'react'
import Fab from '@mui/material/Fab';
import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';

function StickyButton() {
  return (
    <Paper elevation={6} style={{ width: "100%", position: "fixed", bottom: 0, height:"150px"}}>
  <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  sx={{height:"150px"}}
>
  <Grid item >
  <Fab color='primary' sx={{paddingLeft:"40px", paddingRight:"40px"}} fullWidth variant="extended">
   Add To Bag ccc
  </Fab>
  </Grid>
  </Grid>
</Paper>
  
  )
}

export default StickyButton