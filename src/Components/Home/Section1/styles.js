import { styled } from "@mui/system";
import { Typography, Box, Button } from "@mui/material";
import { animated } from "@react-spring/web";



export const AnimatedLayers = styled(Box)({
  width: "100%",
  height: "100%",
  position: "absolute",
  inset: "0",
  zIndex: "-1",

  "& > *": {
    width: "100%",

    height: "100%",
    position: "absolute",
    inset: "0",
  },
});

export const Dot = styled(animated.div)`
background: linear-gradient(
    to bottom,
    rgba(173, 242, 230, 1) 18%,
    #adceff 88%);
  top: "50%";
  left: "50%";
  transform: "translate(-50%, -50%)";
  height: "101%";
`;

export const Title = styled(Typography)({
  color: "inherit",

  "& > span": {
    display: "block",
    overflow: "hidden",

    "& > span": {
      display: "block",
    },
  },
});



export const AnimatedButton = animated(styled(Button)(({ theme }) => ({
  /* your button styles here */
  color: '#adceff', /* default color */
  borderColor: '#000000', /* default outline color */
  backgroundColor: 'white', /* default background color */
  '&:hover': {
    color: '#adceff', /* hover color */
    borderColor: '#acfbe0', /* hover outline color */
    backgroundColor: '#acfbe0', /* hover background color */
  },
})));

export const AnimatedButton2 = animated(styled(Button)(({ theme }) => ({
  /* your button styles here */
  color: '#adf2e6', /* default color */
  borderColor: '#000000', /* default outline color */
  backgroundColor: 'white', /* default background color */
  '&:hover': {
    color: '#adf2e6', /* hover color */
    borderColor: '#acfbe0', /* hover outline color */
    backgroundColor: '#acfbe0', /* hover background color */
  },
})));

