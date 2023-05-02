import React from "react";
import styled from "styled-components";
import { Container, Grid, Button } from "@mui/material";
import {
  HomeWrapper,
  Title,
  Subtitle,
  ButtonWrapper,
  StyledButton,
} from "./styles";
import { Navbar, HeroSection, VideoBackground } from "./styles";
import {
  TextCard,
  TitleCard,
  IconWrapper,
  StyledPaper,
  HeaderWording,
} from "./styles";

const Home = () => {
  return (
    <HeroSection>
      <VideoBackground src="/path/to/video.mp4" autoPlay loop muted />
      <HeaderWording container>
        <Grid item xs={12} md={6}>
        <Title variant="h1">Welcome to Our Website</Title>
        </Grid>
        <Grid item xs={12} md={6}>
        <Title variant="h1">Welcome to Our Website</Title>
        </Grid>
      </HeaderWording>
    </HeroSection>
  );
};

export default Home;
