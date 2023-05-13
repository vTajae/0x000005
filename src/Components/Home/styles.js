
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
  background: linear-gradient(to top, rgba(173,242,230,1) 27%, rgba(255,255,255,1) 97%);
  z-index: 1;
  display: flex;
`;

export const Title = styled(Typography)`
  text-align: center;
`;

export const HomeWrapper = styled(Grid)`

`;

// Home Section 1
export const HomeSection1Wrapper = styled(Grid)({
  background: "linear-gradient(to bottom, rgba(173,242,230,1) 18%, #ADCEFF 88%)",
  color: "inherit",
  height: "100vh",
  padding: "0 16px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  });

  export const AnimatedSection = styled(Grid)({
    background: "white",
    padding: "40px",
    display: "flex",
    justifyContent: "center",
  });

// Home Section 2

export const HomeSection2Wrapper = styled(Grid)({
  background: "linear-gradient(to top, rgba(245,245,245,1) 0%, rgba(173,242,230,1) 7%, rgba(173,242,230,1) 69%, #ADCEFF 99%)",
  color: "inherit",
  height: "100vh",
  padding: "0 16px",
  textAlign: "center",
});

export const HeroLogo = styled(animated.svg)`
width: 100%;
height: auto;

`;

