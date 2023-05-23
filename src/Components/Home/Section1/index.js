import React, { useRef } from "react";
import { useScroll, animated, useSpring } from "@react-spring/web";
import { HomeSection1Wrapper, HomeBackGround } from "../styles";
import { Typography, Stack } from "@mui/material";
import { Dot, Title, AnimatedLayers, AnimatedButton } from "./styles";
import { FooterLink, withScrolling } from "../../Footer";
import "./style.css";

const useAnimatedStyles = (initialY) => {
  const [style, api] = useSpring(() => ({
    opacity: 0,
    y: initialY,
  }));
  return [style, api];
};

const HomeSection1ButtonLink = withScrolling(FooterLink);

const AnimatedButtonLink = ({ to, style, textStyles, children }) => (
  <HomeSection1ButtonLink
    to={to}
    variant="h6"
    sx={{
      fontWeight: "bold",
      "a:visited": {
        color: "inherit" /* or specify the desired color */,
      },
    }}
  >
    <AnimatedButton style={style}>
      <Title variant="h2">
        <span>
          <animated.span
            style={{ transform: textStyles.y.to((y) => `translateY(${y})`) }}
          >
            {children}
          </animated.span>
        </span>
      </Title>
    </AnimatedButton>
  </HomeSection1ButtonLink>
);

export default function HomeSection1({
  title,
  subtitle,
  animatedTitle1,
  animatedTitle2,
}) {
  const containerRef = useRef(null);

  const [buttonStyles1, buttonAPI1] = useAnimatedStyles("100%");
  const [buttonStyles2, buttonAPI2] = useAnimatedStyles("100%");
  const [textStyles1, textAPI1] = useAnimatedStyles("100%");
  const [textStyles2, textAPI2] = useAnimatedStyles("100%");

  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      console.log(scrollYProgress);
      const yValue =
        scrollYProgress > 0.39 && scrollYProgress < 0.65 ? "0%" : "100%";
      const opacityValue =
        scrollYProgress > 0.39 && scrollYProgress < 0.65 ? 1 : 0;

      [buttonAPI1, buttonAPI2].forEach((api) =>
        api.start({ opacity: opacityValue, y: yValue })
      );
      [textAPI1, textAPI2].forEach((api) => api.start({ y: yValue }));
    },
    default: {
      immediate: true,
    },
  });

  return (
    <HomeSection1Wrapper ref={containerRef}>
      <HomeBackGround />

      <Stack spacing={2}>
        <Typography variant="h1" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="h4">{subtitle}</Typography>

        <Stack spacing={6} direction="column" pt={6}>
          <AnimatedButtonLink
            to="/about"
            style={buttonStyles1}
            textStyles={textStyles1}
          >
            {animatedTitle1}
          </AnimatedButtonLink>
          <AnimatedButtonLink
            to="/about"
            style={buttonStyles2}
            textStyles={textStyles2}
          >
            {animatedTitle2}
          </AnimatedButtonLink>
        </Stack>
      </Stack>

      <AnimatedLayers>
        <Dot
          style={{
            clipPath: scrollYProgress.to((val) => `circle(${val * 175}%)`),
          }}
        />
      </AnimatedLayers>
    </HomeSection1Wrapper>
  );
}
