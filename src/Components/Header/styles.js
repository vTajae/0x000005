import styled from "styled-components";
import { Grid, Stack, List, Drawer, Link } from "@mui/material";

export const StyledDrawer = styled(Drawer)`
  test-align: center;
  & > div {
    display: flex;
    align-items: center;
    overflow-y: auto;
    height: auto;
    width: 100%;
  }
`;

export const MainHeader = styled.div`
  background-color: #fff;
  padding: 1rem;
  min-width: 250px;


`;

export const NavbarImage = styled.div`
  width: 50px;
  align-items: center;
  height: 50px;
  border: 5px white solid;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
  animation: float 6s ease-in-out infinite;

  img {
    animation: wiggle 4s ease-in-out infinite;
    width: 150%;
    height: auto;
    position: relative;
    left: -30%;
    bottom: 2%;
    scale: 1.4;
  }

  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
    img {
      width: 100%;
      left: 0;
      bottom: 0;
    }
  }
`;


export const StyledGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const StyledGridChild = styled(Grid)``;

export const StyledLink = styled(Link)`
color: #000;
`;



export const MyIcons = styled(Grid)``;

export const Logo = styled.img`
  @media (max-width: 600px) {
    width: 65px;
  }

  @media (min-width: 600px) {
    width: 75px;
  }
`;
