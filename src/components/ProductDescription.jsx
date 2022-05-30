import React from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import DropDownDescription from './DropDownDescription';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import StickyButton from './StickyButton';

function ProductDescription() {
  return (
    <>
    <Box sx={{ width: "100%" }}>
    <Container maxWidth="xl" sx={{marginBottom:"160px"}}>
   
    <Grid container spacing={1}>
    <Grid item xs={12} >
    <Typography variant="body" color="secondary" component="div">
    EXCLUSIVE LIMITED EDITION
      </Typography>
    </Grid>
    <Grid item xs={12}>
    <Typography variant="h6" component="div">
 title
 </Typography>
    </Grid>
    <Grid item xs={12}>
    <Typography variant="h6" component="div">
    $325.00
    </Typography>
    </Grid>
    <Grid item xs={12}>
    <Typography variant="body" color="secondary" component="div">
    Fit Regular - High Bridge Fit
    </Typography>
    </Grid>
    <Grid item xs={12}>
    <Typography variant="body" color="secondary" component="div">
    Size M
    </Typography>
    </Grid>
    <Grid item xs={12}>
   <DropDownDescription/>
    </Grid>
  </Grid>
  </Container>
  <StickyButton/>
   </Box>
  </>
  )
}

export default ProductDescription