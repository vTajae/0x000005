import styled from "styled-components";
import { Grid, Stack, List, Drawer, Box, Container, Button, Typography } from "@mui/material";

export const HomeWrapper = styled(Grid)`
  font-size: 48px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  text-align: center;
`;

export const HomeGrid = styled(Grid)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DaRow = styled(Grid)`
  flex-direction: column;

  div{
  padding: 2rem 0;
}
`;

export const Avatar = styled.div`
  width: 150px;
  align-items: center !important;
  height: 150px;
  box-sizing: border-box;
  border: 5px white solid;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;
  img {   animation: wiggle 4s ease-in-out infinite;
    width: 150%; height: auto; position: relative; left: -30%; bottom: 2%; }
`;

export const Contact = styled(Button)`
    font-weight: 600 !important;

`;