
import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import { animated } from '@react-spring/web';

export const HeroSectionWrapper = styled('section')(({ background }) => `
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(${background}) no-repeat center center;
  background-size: cover;
  color: black;
`);

// export const Overlay = styled('div')`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   z-index: 1;
//   display: flex;
// `;

export const Overlay = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  z-index: 1;
  display: flex;
`;

export const Title = styled(Typography)`
  font-size: 3rem;
  text-align: center;
`;

export const HomeWrapper = styled(Grid)`

`;

export const HomeSection1 = styled(Grid)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  color: "white",
  height: "100vh",
  padding: "0 16px",
  textAlign: "center",
});

export const HomeSection2 = styled(Grid)({
  background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
  color: "white",
  height: "100vh",
  padding: "0 16px",
  textAlign: "center",
});

export const HeroLogo = styled(animated.svg)`
width: 100%;
height: auto;

`;

