
import { styled } from '@mui/material/styles';
import { Grid, Typography, Box } from '@mui/material';
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
  background: linear-gradient(to top, rgba(173,242,230,1) 4%, rgba(255,255,255,1) 52%);
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
  color: "inherit",
  backgroundColor: "transparent",
  height: "100vh",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  padding: "0 16px",
  justifyContent: "center",
  position: "relative",
  zIndex: "0",
  });

  export const HomeBackGround = styled(Box)({
    background: "linear-gradient(to bottom, rgba(173,242,230,1) 4%, rgba(255,255,255,1) 52%)",
    height: "100vh", 
    width: "100vw",
    position: "absolute",
    zIndex: "-1",
    });
  

  // export const AnimatedSection = styled(Grid)({
  //   background: "white",
  //   padding: "40px",
  //   display: "flex",
  //   justifyContent: "center",
  // });

    export const AnimatedSection = styled(animated.div)`

  `;


// Home Section 2

export const HomeSection2Wrapper = styled(Grid)({
  background: "linear-gradient(to top, rgba(245,245,245,1) 0%, rgba(173,242,230,1) 7%, rgba(173,242,230,1) 69%, #ADCEFF 99%)",
  color: "inherit",
  padding: "0 16px",
  height: "60vh",
  textAlign: "center",
});

export const HeroLogo = styled(animated.svg)`
width: 100%;
height: auto;

`;

