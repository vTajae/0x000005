import React, { useState } from "react";
import PropTypes from "prop-types";
import { HomeSection1Wrapper, AnimatedSection } from "../styles";
import { useSpring, animated } from "@react-spring/web";
import { Typography, Stack } from "@mui/material";

export const HomeSection1 = ({ title, subtitle, animatedTitle1, animatedTitle2 }) => {
    const [scrollYProgress, setScrollYProgress] = useState(0);
    const svgAnimation = useSpring({
      from: { scale: 1, rotateZ: -10 },
      to: { scale: 1.1, rotateZ: 10 },
      config: { tension: 300, friction: 20, mass: 1, duration: 6000 },
      loop: { reverse: true }, // use the "reverse" option in the "loop" object
    });
  
    const handleScroll = () => {
      setScrollYProgress(window.scrollY);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return (
      <HomeSection1Wrapper container alignItems="center" justifyContent="center">
        <Stack spacing={2}>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
          <Typography variant="h5">{subtitle}</Typography>
          <animated.div style={{ opacity: scrollYProgress }}>
            {/* Add your animated content for the first section */}
            <Typography variant="h3" color="primary">
              {animatedTitle1}
            </Typography>
          </animated.div>
          <animated.div style={{ opacity: scrollYProgress }}>
            {/* Add your animated content for the second section */}
            <Typography variant="h3" color="secondary">
              {animatedTitle2}
  
            </Typography>
          </animated.div>
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
  
