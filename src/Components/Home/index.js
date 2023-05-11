import React from "react";
import { Grid, Button, Typography, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { HomeWrapper, Title, Overlay, HeroSectionWrapper } from "./styles";
import { HeroSectionData } from "./data.js";
import { HomeSection1, HomeSection2 } from "./styles";
import { HeroLogo } from "./styles";
import { useSpring, animated } from "@react-spring/web";

const HeroSection = ({ title, background, coverImage }) => {
  const svgAnimation = useSpring({
    from: { scale: 1, rotateZ: -10},
    to: { scale: 1.1, rotateZ: 10 },
    config: { tension: 300, friction: 20, mass: 1, duration: 3000 },
    loop: { reverse: true }, // use the "reverse" option in the "loop" object
  });

  return (
    <HeroSectionWrapper style={{ background }}>
      <Overlay>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Title variant="h1">{title}</Title>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <animated.img
              style={svgAnimation}
              src={coverImage}
              alt="logo"
            />
          </Grid>
        </Grid>
      </Overlay>
    </HeroSectionWrapper>
  );
};

HeroSection.propTypes = {
  background: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
};

const Home = () => {
  return (
    <HomeWrapper container>
      <Grid item xs={12}>
        {HeroSectionData.map((section, index) => (
          <HeroSection
            key={index}
            background={section.background}
            title={section.title}
            coverImage={section.coverImage}
          />
        ))}
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
