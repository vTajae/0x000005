import styled from 'styled-components';
import { Container, Grid, Button, Typography, Paper, Box, CardMedia } from '@mui/material';
import { Image } from '@mui/icons-material';

export const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
`;

// export const VideoBackground = styled.video`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   z-index: -1;
// `;

export const PhotoBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;


export const VideoBackground = styled(CardMedia)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: -1,
});




export const Title = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
`;

export const StyledPaper = styled(Paper)`
  background-color: #fff;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background-color: #f50057;
  color: #fff;
  border-radius: 50%;
  margin-bottom: 16px;
`;

export const TitleCard = styled(Typography)`
  font-size: 24px;

`;

export const TextCard = styled(Typography)`

`;

export const HeaderWording = styled(Grid)`
z-index: 2;
position: relative;
text-align: center;
align-items: center;
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

export const HeaderImg = styled.img`
width: 100%;
`;
