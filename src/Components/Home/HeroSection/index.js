import PropTypes from "prop-types";
import React from "react";
import {
  Grid,
  Button,
  Typography,
  Stack,
  CircularProgress,
} from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import { HomeWrapper, Title, Overlay, HeroSectionWrapper } from "./styles";




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

  export default HeroSection;