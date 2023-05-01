import styled from "styled-components";
import { Button, Grid } from "@mui/material";
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
  height: 100%;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const NavLink = styled(Link)`
  margin: 0;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  height: 100%;

  &.navActive {
    color: #000;
  }
`;

export const NavWrapper = styled(Grid)`
  height: 100%;
  align-items: center;
`;


export const StyledNavLink = styled(Link).attrs(() => ({
  role: "button",
  "aria-haspopup": true,
  "aria-expanded": false,
}))`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &.navActive {
    color: #000;
  }
`;

export const RegularNav = styled(Grid)`
  /* Add any styles for the regular navbar here */
`;
