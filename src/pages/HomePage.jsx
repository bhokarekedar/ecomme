import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTranslation } from "react-i18next";
import ProfileCard from "../components/ProfileCard";
import Grid from "@mui/material/Grid";
import { FetchUsers } from "../redux/userSlice";
import { useSelector } from "react-redux";
import HedarImage from "../components/HedarImage";
import MidBannerCard from "../components/MidBannerCard";
import ImageCard from "../components/ImageCard";
import logo from "../images/logo.png";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/People";
import MessageIcon from "@mui/icons-material/Message";
import HedaerTitle from "../components/HedaerTitle";
import Footer from "../components/Footer";
import Paper from "@mui/material/Paper";


import { useFetchData } from "../util/customHooks/useFetchData";
// import SliderImages from '../components/SliderImages';
import ImageData from "../images/banner.jpg";

function HomePage() {
  // const { t } = useTranslation(['Labels', 'MenuLabels', 'Errors']);
  // const fetcheddata = useSelector((state) => state.user.data);
  // const { loading, error } = useFetchData("posts", FetchUsers);

  const iconsData = [
    {
      icon: ModeEditIcon,
      header: "abc",
      description: "hhhjhhjj nnhnh",
    },
    {
      icon: SearchIcon,
      header: "abc",
      description: "hhhjhhjj nnhnh",
    },
    {
      icon: PeopleIcon,
      header: "abc",
      description: "hhhjhhjj nnhnh",
    },
    {
      icon: MessageIcon,
      header: "abc",
      description: "hhhjhhjj nnhnh",
    },
  ];

  const MatchData = [
    {
      imageUrl: logo,
      header: "abc",
      description: "hhhjhhjj nnhnh",
    },
    {
      imageUrl: logo,
      header: "dsd",
      description: "sdsd nnhnh",
    },
    {
      imageUrl: logo,
      header: "dsd",
      description: "sdsd nnhnh",
    },
    {
      imageUrl: logo,
      header: "dsd",
      description: "sdsd nnhnh",
    },
  ];

  return (
    <>
      {/* start HEADER */}
      <HedarImage data={{ ImageData: ImageData }} />
      {/* END HEADER */}

      {/* start MidBannerCard */}
      {/* <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {iconsData.map((Icdata, index) => {
                        return (

                            <Grid item xl={3} sm={6} md={3} xs={12}>
                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Grid item>
                                        <MidBannerCard
                                            Icdata={{
                                                icon: Icdata.icon,
                                                header: Icdata.header,
                                                description: Icdata.description
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>

                        )

                    }
                    )}
                </Grid>
            </Box>  */}
      {/* END MidBannerCard */}
      <Container maxWidth="xl">
        <Box sx={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xl={3} sm={6} md={3} xs={12}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                sx={{ height: "60vh" }}
              >
                <Grid item>
                  <Paper elevation={6} sx={{ height: "60vh"}}>
                  <Grid container component="main" sx={{ height: "50vh" }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        sx={{
          backgroundImage: `url(${ImageData})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
     />
       
    </Grid>
                    {/* <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      sx={{ height: "60vh" }}
                    >
                      <Grid item>ggg</Grid>
                    </Grid> */}
                  </Paper>
                  {/* <Paper elevation={6} sx={{ width: "90%", height: "60vh" }}>
                    gg
                  </Paper> */}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={3} sm={6} md={3} xs={12}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                sx={{ height: "60vh" }}
              >
                <Grid item>
                  <Paper elevation={6}>
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      sx={{ height: "60vh" }}
                    >
                      <Grid item>ggg</Grid>
                    </Grid>
                  </Paper>
                  {/* <Paper elevation={6} sx={{ width: "90%", height: "60vh" }}>
                    gg
                  </Paper> */}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={3} sm={6} md={3} xs={12}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                sx={{ height: "60vh" }}
              >
                <Grid item>
                  <Paper elevation={6}>
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      sx={{ height: "60vh" }}
                    >
                      <Grid item>ggg</Grid>
                    </Grid>
                  </Paper>
                  {/* <Paper elevation={6} sx={{ width: "90%", height: "60vh" }}>
                    gg
                  </Paper> */}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={3} sm={6} md={3} xs={12}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                sx={{ height: "60vh" }}
              >
                <Grid item>
                  <Paper elevation={6}>
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      sx={{ height: "60vh" }}
                    >
                      <Grid item>ggg</Grid>
                    </Grid>
                  </Paper>
                  {/* <Paper elevation={6} sx={{ width: "90%", height: "60vh" }}>
                    gg
                  </Paper> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
      {/* start image card */}
      {/* <Container maxWidth="xl"> */}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={2}
        // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {MatchData.map((matchval, index) => {
          return (
            <Grid item xl={3} sm={6} md={3} xs={12}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                // rowSpacing={1}
                // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item>
                  <ImageCard
                    data={{
                      imageUrl: matchval.imageUrl,
                      header: matchval.header,
                      description: matchval.description,
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
      {/* </Container>  */}
      {/* end image card */}

      {/* start HEADER title */}
      <HedaerTitle
        val={{
          variant: "h6",
          title: "fddddddddddddddddddddfdfd",
          colorVal: "#3f50b5",
        }}
      />
      {/* END HEADER title */}
      {/* start SliderImage  */}
      {/* <SliderImages /> */}
      {/* end SliderImage  */}
      {/* start footer  */}
      <Footer />
      {/* end footer  */}
    </>
  );
}

export default HomePage;
