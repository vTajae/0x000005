import React from "react";
import { Grid, Button, Typography, Stack, CircularProgress } from "@mui/material";
import PropTypes from "prop-types";
import { HomeWrapper, Title, Overlay, HeroSectionWrapper } from "./styles";
import { HeroSectionData, HomeSection1Data, HomeSection2Data } from "./data.js";
import { HomeSection1Wrapper, HomeSection2Wrapper } from "./styles";
import { HeroLogo, AnimatedSection } from "./styles";
import { useSpring, animated } from "@react-spring/web";
import HomeSection1 from "./Section1";

const HeroSection = ({ title, background, coverImage }) => {
  const svgAnimation = useSpring({
    from: { scale: 1, rotateZ: -2.5 },
    to: { scale: 1.1, rotateZ: 2.5 },
    config: { tension: 120, friction: 5, },
    loop: { reverse: true }, // use the "reverse" option in the "loop" object
  });

  return (
    <HeroSectionWrapper style={{ background }}>
      <Overlay>
        <Grid container justifyContent="center" alignItems="center" spacing={0}>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Title variant="h1">{title}</Title>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <animated.img style={svgAnimation} src={coverImage} alt="logo" />
          </Grid>
        </Grid>
      </Overlay>
    </HeroSectionWrapper>
  );
};

HeroSection.propTypes = {
  background: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  coverImage: PropTypes.string,
};




const HomeSection2 = ({ title, subtitle }) => {
  const svgAnimation = useSpring({
    from: { scale: 1, rotateZ: -10 },
    to: { scale: 1.1, rotateZ: 10 },
    config: { tension: 300, friction: 20, mass: 1, duration: 6000 },
    reverse: true,
    loop: true,
  });


  return (
    <HomeSection2Wrapper container justifyContent="center">
      <Stack spacing={2}>
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="h5">{subtitle}</Typography>
        <AnimatedSection style={svgAnimation}>
          <CircularProgress size={60} thickness={4} sx={{color: "#f5f5f5"}}/> {/* Loading animation with CircularProgress */}
        </AnimatedSection>
      </Stack>
    </HomeSection2Wrapper>
  );
};



HomeSection2.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  animatedTitle1: PropTypes.string.isRequired,
  animatedTitle2: PropTypes.string.isRequired,
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
        {HomeSection1Data.map((section, index) => (
          <HomeSection1
            key={index}
            title={section.title}
            subtitle={section.subtitle}
            animatedTitle1={section.animatedTitle1}
            animatedTitle2={section.animatedTitle2}
          />
        ))}
      </Grid>
      <Grid item  xs={12}>
        {HomeSection2Data.map((section, index) => (
          <HomeSection2
            key={index}
            title={section.title}
            subtitle={section.subtitle}
            animatedTitle1={section.animatedTitle1}
            animatedTitle2={section.animatedTitle2}
          />
        ))}
      </Grid>
    </HomeWrapper>
  );
};

export default Home;
