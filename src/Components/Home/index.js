import React from "react";
import {
  Grid,
  Button,
  Typography,
  Stack,
  CircularProgress,
} from "@mui/material";
import PropTypes from "prop-types";
import { HomeWrapper, Title, Overlay, HeroSectionWrapper } from "./styles";
import { HeroSectionData, HomeSection1Data, HomeSection2Data } from "./data.js";
import { HomeSection1Wrapper, HomeSection2Wrapper } from "./styles";
import { HeroLogo, AnimatedSection } from "./styles";
import { useSpring, animated } from "@react-spring/web";
import HomeSection2 from "./Section2";
import HeroSection from "./HeroSection";
import HomeSection3 from "./Section3";

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
          <HomeSection2
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
          <HomeSection3
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
