import React from "react";
import { Grid, Button, Typography, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { HomeWrapper, Title, Overlay, HeroSectionWrapper } from "./styles";
import { HeroSectionData } from "./data.js";
import { HomeSection1, HomeSection2 } from "./styles";
import { HeroLogo } from "./styles";
import { useSpring, animated } from "@react-spring/web";

const HeroSection = ({ title, background, coverImage }) => {
  // Define the animation properties
  const { x } = useSpring({
    from: { x: 0 },
    to: { x: 1 },
    config: { duration: 300 },
    reset: true,
    reverse: true,
    loop: true,
  });

  // Use the animated component to animate the HeroLogo
  const AnimatedHeroLogo = animated(HeroLogo);

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
            <AnimatedHeroLogo
              style={{
                transform: x
                  .to({
                    range: [0, 0.25, 0.75, 1],
                    output: [0, -10, 10, 0],
                  })
                  .to((x) => `translate3d(0, ${x}px, 0)`),
              }}
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
