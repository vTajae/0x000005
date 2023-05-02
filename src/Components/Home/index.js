import React from "react";
import { Container, Grid, Button, Typography, Stack } from "@mui/material";
import {
  HomeWrapper,
  Title,
  Subtitle,
  ButtonWrapper,
  StyledButton,
} from "./styles";
import {
  Navbar,
  HeroSection,
  VideoBackground,
  PhotoBackground,
} from "./styles";
import {
  TextCard,
  TitleCard,
  IconWrapper,
  StyledPaper,
  HeaderWording,
  HeaderImg,
} from "./styles";
// import { homeSections }  from "./data.js";
import { HomeSection1, HomeSection2 } from "./styles";
import HeroImg from "../../../src/assets/test.jpg";

import coverImage from "../../assets/logo.svg";

const Home = () => {
  return (
    <HomeWrapper container>
      <Grid item xs={12}>
        <HeroSection>
          <PhotoBackground src={HeroImg} alt="hero" />
          <HeaderWording container>
            <Grid item xs={12} md={6}>
              <Title variant="h1">Driven By YOU</Title>
            </Grid>
            <Grid item xs={12} md={6}>
              <HeaderImg src={coverImage} alt="logo" />
            </Grid>
          </HeaderWording>
        </HeroSection>
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
