import styled from 'styled-components';
import { Container, Grid, Button, Typography, Paper } from '@mui/material';

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
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;


export const Title = styled.h1`
  font-size: 64px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 24px;

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
`;
