import React from "react";
import {
  MainNav,
  NavLink,
  NavWrapper,
  RegularNav,
  StyledNavLink,
} from "./styles";
import { Grid, useMediaQuery } from "@mui/material";
import Auth from "../../utils/auth";

export const Nav = () => {
  const isMobile = useMediaQuery("(max-width:900px)");

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <>
          {/* Render mobile navbar for screens up to 900px */}
          {isMobile && (
            <NavWrapper container spacing={1}>
              <Grid item xs={12}>
                <NavLink to="/home">Home</NavLink>
              </Grid>
              <Grid item xs={12}>
                <NavLink to="/registration">Registration</NavLink>
              </Grid>
            </NavWrapper>
          )}

          {/* Render regular navbar for screens above 900px */}
          {!isMobile && (
            <RegularNav container spacing={1} alignItems="stretch">
              <Grid item xs={12} md={2}>
                <NavLink to="/home">Home</NavLink>
              </Grid>
              <Grid item xs={12} md={2}>
                <NavLink to="/registration">Registration</NavLink>
              </Grid>
            </RegularNav>
          )}
        </>
      );
    } else {
      return (
        <>
          {/* Render mobile navbar for screens up to 900px */}
          {isMobile && (
            <NavWrapper container alignItems="stretch">
              <Grid item xs={12}>
                <StyledNavLink to="/">Home</StyledNavLink>
              </Grid>
              <Grid item xs={12}>
                <StyledNavLink to="/about">About Us</StyledNavLink>
              </Grid>
              <Grid item xs={12}>
                <StyledNavLink to="/contact">Contact Us</StyledNavLink>
              </Grid>
              <Grid item xs={12}>
                <StyledNavLink to="/registration">Registration</StyledNavLink>
              </Grid>
              <Grid item xs={12}>
                <StyledNavLink to="/login">Login</StyledNavLink>
              </Grid>
            </NavWrapper>
          )}

          {/* Render regular navbar for screens above 900px */}
          {!isMobile && (
            <RegularNav container>
              <Grid item xs={12} md={2}>
                <NavLink to="/">Home</NavLink>
              </Grid>
              <Grid item xs={12} md={2}>
                <NavLink to="/about">About</NavLink>
              </Grid>
              <Grid item xs={12} md={2}>
                <NavLink to="/contact">Contact</NavLink>
              </Grid>
              <Grid item xs={12} md={2}>
                <NavLink to="/registration">Registration</NavLink>
              </Grid>
              <Grid item xs={12} md={2}>
                <NavLink to="/login">Login</NavLink>
              </Grid>
            </RegularNav>
          )}
        </>
      );
    }
  }

  return <MainNav>{showNavigation()}</MainNav>;
};



export default Nav;
