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
import { useSpring, animated } from "@react-spring/web";

// Wrap the NavLink and StyledNavLink components with the animated component
const AnimatedNavLink = animated(NavLink);
const AnimatedStyledNavLink = animated(StyledNavLink);

// Use the animated components in the Nav component
export const Nav = () => {
  // Define the spring animation configuration
  const animationConfig = { to: { transform: "scale(1.1)" } };

  // Define the spring animation hooks for the NavLink and StyledNavLink components
  const navLinkAnimation = useSpring(animationConfig);
  const styledNavLinkAnimation = useSpring(animationConfig);

  // Handle the click event for the NavLink and StyledNavLink components
  const handleNavLinkClick = (event) => {
    // Trigger the spring animation on click
    navLinkAnimation.start(animationConfig);
  };

  const handleStyledNavLinkClick = (event) => {
    // Trigger the spring animation on click
    styledNavLinkAnimation.start(animationConfig);
  };

  // ...
  return (
    <MainNav>
      {isMobile && (
        <Grid container spacing={1}>
          <Grid item xs={12}>
            {/* Use the AnimatedNavLink and AnimatedStyledNavLink components */}
            <AnimatedStyledNavLink
              exact
              to="/"
              onClick={handleStyledNavLinkClick}
              style={styledNavLinkAnimation}
            >
              Home
            </AnimatedStyledNavLink>
          </Grid>
          <Grid item xs={12}>
            <AnimatedNavLink
              to="/about"
              onClick={handleNavLinkClick}
              style={navLinkAnimation}
            >
              About Us
            </AnimatedNavLink>
          </Grid>
          <Grid item xs={12}>
            <AnimatedNavLink
              to="/contact"
              onClick={handleNavLinkClick}
              style={navLinkAnimation}
            >
              Contact Us
            </AnimatedNavLink>
          </Grid>
          <Grid item xs={12}>
            <AnimatedNavLink
              to="/registration"
              onClick={handleNavLinkClick}
              style={navLinkAnimation}
            >
              Registration
            </AnimatedNavLink>
          </Grid>
          <Grid item xs={12}>
            <AnimatedNavLink
              to="/login"
              onClick={handleNavLinkClick}
              style={navLinkAnimation}
            >
              Login
            </AnimatedNavLink>
          </Grid>
        </Grid>
      )}

      {!isMobile && (
        <RegularNav container>
          {/* Use the AnimatedNavLink component */}
          <Grid item xs={12} md={2}>
            <AnimatedNavLink
              exact
              to="/"
              onClick={handleNavLinkClick}
              style={navLinkAnimation}
            >
              Home
            </AnimatedNavLink>
          </Grid>
          <Grid item xs={12} md={2}>
            <AnimatedNavLink
              to="/sandbox"
              onClick={handleNavLinkClick}
              style={navLinkAnimation}
            >
              Sandbox
            </AnimatedNavLink>
          </Grid>
          <Grid item xs={12} md={2}>
            <AnimatedNavLink
              to="/about"
              onClick={handleNavLinkClick}
              style={navLinkAnimation}
            >
              About
            </AnimatedNavLink>
          </Grid>
          <Grid item xs={12} md={2}>
            <AnimatedNavLink
              to="/contact"
              onClick={handleNavLinkClick}
              style={navLinkAnimation}
            >
              Contact
            </AnimatedNavLink>
          </Grid>
          <Grid item xs={12} md={2}>
            <AnimatedNavLink
              to="/registration"
              onClick={handleNavLinkClick}
              style={navLinkAnimation}
            >
              Registration
            </AnimatedNavLink>
          </Grid>
          <Grid item xs={12} md={2}>
            <AnimatedNavLink
              to="/login"
              onClick={handleNavLinkClick}
              style={navLinkAnimation}
            >
              Login
            </AnimatedNavLink>
          </Grid>
        </RegularNav>
      )}
    </MainNav>
  );
};

export default Nav;
