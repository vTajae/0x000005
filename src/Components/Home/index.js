import React from "react";
import { Grid, Button, Typography, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { HomeWrapper, Title, Overlay, HeroSectionWrapper } from "./styles";
import { HeroSectionData, HomeSection1Data, HomeSection2Data } from "./data.js";
import { HomeSection1Wrapper, HomeSection2Wrapper } from "./styles";
import { HeroLogo, AnimatedSection } from "./styles";
import { useSpring, animated } from "@react-spring/web";

const HeroSection = ({ title, background, coverImage }) => {
  const svgAnimation = useSpring({
    from: { scale: 1, rotateZ: -10 },
    to: { scale: 1.1, rotateZ: 10 },
    config: { tension: 300, friction: 20, mass: 1, duration: 6000 },
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
  coverImage: PropTypes.string.isRequired,
};

const HomeSection1 = ({ title, subtitle, animatedTitle1, animatedTitle2 }) => {
  const svgAnimation = useSpring({
    from: { scale: 1, rotateZ: -10 },
    to: { scale: 1.1, rotateZ: 10 },
    config: { tension: 300, friction: 20, mass: 1, duration: 6000 },
    loop: { reverse: true }, // use the "reverse" option in the "loop" object
  });

  return (
    <HomeSection1Wrapper container alignItems="center" justifyContent="center">
      <Stack spacing={2}>
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="h5">{subtitle}</Typography>
        <AnimatedSection>
          {/* Add your animated content for the first section */}
          <Typography variant="h3" color="primary">
            {animatedTitle1}
          </Typography>
        </AnimatedSection>
        <AnimatedSection>
          {/* Add your animated content for the second section */}
          <Typography variant="h3" color="secondary">
            {animatedTitle2}

          </Typography>
        </AnimatedSection>
      </Stack>
    </HomeSection1Wrapper>
  );
};

HomeSection1.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  animatedTitle1: PropTypes.string.isRequired,
  animatedTitle2: PropTypes.string.isRequired,
};

const HomeSection2 = ({ title, subtitle, animatedTitle1, animatedTitle2 }) => {
  const svgAnimation = useSpring({
    from: { scale: 1, rotateZ: -10 },
    to: { scale: 1.1, rotateZ: 10 },
    config: { tension: 300, friction: 20, mass: 1, duration: 6000 },
    loop: { reverse: true }, // use the "reverse" option in the "loop" object
  });

  return (
    <HomeSection2Wrapper container alignItems="center" justifyContent="center">
      <Stack spacing={2}>
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="h5">{subtitle}</Typography>
        <AnimatedSection>
          {/* Add your animated content for the first section */}
          <Typography variant="h3" color="primary">
            {animatedTitle1}
          </Typography>
        </AnimatedSection>
        <AnimatedSection>
          {/* Add your animated content for the second section */}
          <Typography variant="h3" color="secondary">
            {animatedTitle2}

          </Typography>
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
      <Grid item xs={12}>
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
