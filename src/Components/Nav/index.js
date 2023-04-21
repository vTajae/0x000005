import React from "react";
import { MainNav, NavLink } from "./styles";
import { Grid } from "@mui/material";
import Auth from "../../utils/auth";

function Nav(props) {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Grid container spacing={1}>
          <Grid item xs={12} md={2}>
            <NavLink to="/home">Home</NavLink>
          </Grid>
          <Grid item xs={12} md={2}>
            <NavLink to="/registration">Registration</NavLink>
          </Grid>
          <Grid item xs={12} md={2}>
            <NavLink to="/sandbox">Sandbox</NavLink>
          </Grid>
          <Grid item xs={12} md={2}>
            <NavLink to="/about">About</NavLink>
          </Grid>
        </Grid>
      );
    } else {
      return (
        <Grid container>
        <Grid item xs={12} md={2}>
          <NavLink to="/">Home</NavLink>
        </Grid>
        {/* <Grid item xs={12} md={2}>
          <NavLink to="/sandbox">Sandbox</NavLink>
        </Grid>
        <Grid item xs={12} md={2}>
          <NavLink to="/about">About</NavLink>
        </Grid>
        <Grid item xs={12} md={2}>
          <NavLink to="/contact">Contact</NavLink>
        </Grid> */}
        <Grid item xs={12} md={2}>
          <NavLink to="/registration">Registration</NavLink>
        </Grid>
        <Grid item xs={12} md={2}>
          <NavLink to="/login">Login</NavLink>
        </Grid>
      </Grid>
      );
    }
  }

  return (
    <MainNav>
      {showNavigation()}
    </MainNav>
  );
}

export default Nav;
