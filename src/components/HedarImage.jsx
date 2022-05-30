import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import CustomButton from "./CustomButton";
import ButtonDesk from "./ButtonDesk";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function HedarImage({ data }) {
  debugger;
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Grid container component="main" sx={{ height: "80vh" }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        sx={{
          backgroundImage: `url(${data.ImageData})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid container component="main" sx={{ height: "80vh" }}>
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Grid
              container
              component="main"
              sx={{
                height: "30vh",
                paddingTop: "20px",
               
              }}
            >
              <Grid
                container
                direction="column"
                justifyContent="flex-end"
                alignItems="center"
                spacing={1}
                sx={{
                  paddingBottom: "20px",
                }}
              >
                <Grid item>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography
                        sx={{
                          textAlign: "center",
                          color:"#fff"
                        }}
                        variant="h4"
                        gutterBottom
                        component="div"
                      >
                       GEAR UP FOR SUMMER
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container>
                    <Grid item xs={12}>
                      <ButtonDesk />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HedarImage;
