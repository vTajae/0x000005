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
import { AnimatedSection, HomeSection2Wrapper } from "./styles";

const HomeSection3 = ({ title, subtitle }) => {
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
            <CircularProgress size={60} thickness={4} sx={{ color: "#f5f5f5" }} />{" "}
            {/* Loading animation with CircularProgress */}
          </AnimatedSection>
        </Stack>
      </HomeSection2Wrapper>
    );
  };
  
  HomeSection3.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    animatedTitle1: PropTypes.string.isRequired,
    animatedTitle2: PropTypes.string.isRequired,
  };

  export default HomeSection3;