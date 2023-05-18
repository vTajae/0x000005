import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { HomeSection1Wrapper } from "../styles";
import { useSpring, animated, useScroll } from "@react-spring/web";
import { Typography } from "@mui/material";

const HomeSection1 = ({ animatedTitle1 }) => {
  const parentRef = useRef(null);
  const { scrollYProgress } = useScroll();

  return (
    <HomeSection1Wrapper
      ref={parentRef}
      container
      alignItems="center"
      justifyContent="center"
    >
      <animated.div style={{ position: "relative", opacity: scrollYProgress }}>
        {/* Add your animated content for the first section */}
        <Typography variant="h3" color="primary">
          {animatedTitle1}
        </Typography>
      </animated.div>
    </HomeSection1Wrapper>
  );
};

HomeSection1.propTypes = {
  animatedTitle1: PropTypes.string,
};

export default HomeSection1;
