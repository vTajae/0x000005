import styled from "styled-components";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledButton = styled(Button)`
  background-color: #0777S;
  border: 0;
  border-radius: 0;
  color: #000;
  padding: 0;
  margin: 0;
  text-transform: capitalize;
  width: 100%;

  font-size: larger;

  @media (min-width: 0px) and (max-width: 600px) {
    height: 100px;
  }
`;

export const MainNav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: center;
 

  @media (max-width: 600px) {
    flex-wrap: wrap;
    width: 100vw;
  }
`;

export const NavLink = styled(Link)`
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &.navActive {
    color: #000;
  }
`;
