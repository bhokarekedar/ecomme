import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import SliderImages from "../components/SliderImages";
import Box from "@mui/material/Box";
import ProductDescription from "../components/ProductDescription";

function Product() {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    // <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} 
      //columnSpacing={{ xs: 4, sm: 10, md: 3 }}
      >
        <Grid item xs={12} md={8}>
            <SliderImages />
        </Grid>
        <Grid item xs={12} md={4} sx={{marginTop:  matchesMd ? "20px": "0px", }}>
            <ProductDescription/>
        </Grid>
      </Grid>
    // </Box>
  );
}

export default Product;
