import React from "react";
import { Grid, Button, Typography, Stack } from "@mui/material";
import PropTypes from "prop-types";

import {
  HomeWrapper,
  Title,
  Overlay,
  HeroSectionWrapper,
} from "./styles";
// import { homeSections }  from "./data.js";
import { HomeSection1, HomeSection2 } from "./styles";
import HeroImg from "../../../src/assets/test.jpg";

import coverImage from "../../assets/logo.svg";

const HeroSection = ({ background, title }) => (
  <HeroSectionWrapper background={background}>
    <Overlay>
      <Stack spacing={2}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12} md={6}>
            <Title variant="h1">{title}</Title>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={coverImage} alt="logo" />
          </Grid>
        </Grid>
      </Stack>
    </Overlay>
  </HeroSectionWrapper>
);

HeroSection.propTypes = {
  background: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const Home = () => {
  return (
    <HomeWrapper container>
      <Grid item xs={12}>
        <HeroSection background={HeroImg} title="Welcome to the Home Page" />
      </Grid>
      <Grid item xs={12}>
        <HomeSection1 container alignItems="center" justifyContent="center">
          <Stack spacing={2}>
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              Driven By You
            </Typography>
            <Typography variant="h5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }}>
              Learn More
            </Button>
          </Stack>
        </HomeSection1>
      </Grid>
      <Grid item xs={12}>
        <HomeSection2 container alignItems="center" justifyContent="center">
          <Stack spacing={2}>
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              Our Services
            </Typography>
            <Typography variant="h5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Button variant="outlined" sx={{ mt: 2, color: "white" }}>
              Get Started
            </Button>
          </Stack>
        </HomeSection2>
      </Grid>
    </HomeWrapper>
  );
};

export default Home;
