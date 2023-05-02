import React, { useState, useRef, useEffect } from "react";
import coverImage from "../../assets/logo.svg";
import { MainHeader, StyledGrid, StyledDrawer, Logo } from "./styles";
import { Grid, IconButton, Drawer, Typography, Box } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import useMediaQuery from "@mui/material/useMediaQuery";

function Header(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const headerRef = useRef(null);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const smallScreen = useMediaQuery("(max-width:900px)");

  useEffect(() => {
    let requestId;

    const handleScroll = () => {
      if (headerRef.current) {
        const { height } = headerRef.current.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const newScrollY = Math.max(0, scrollTop - height);
        setScrollY(newScrollY);
      }
    };

    const updateAnimation = () => {
      if (headerRef.current) {
        headerRef.current.style.transform = `translateY(-${scrollY}px)`;
        requestId = window.requestAnimationFrame(updateAnimation);
      }
    };

    window.addEventListener("scroll", handleScroll);

    requestId = window.requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(requestId);
    };
  }, [scrollY]);

  return (
    <header ref={headerRef}>
      <MainHeader>
        {smallScreen ? (
          <StyledGrid container spacing={1}>
            <Grid item xs={7} sm={4}>
              <Box display="flex" alignItems="center">
                <Logo src={coverImage} alt="logo" />
                <Typography variant="h5" component="h1" sx={{ marginRight: 5 }}>
                  Qias.Me
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3} sm={8}>
              <Box display="flex" alignItems="center" justifyContent="flex-end">
                <IconButton onClick={handleDrawerToggle}>
                  <AppsIcon />
                </IconButton>
                <StyledDrawer open={drawerOpen} onClick={handleDrawerToggle}>
                  {props.children}
                </StyledDrawer>
              </Box>
            </Grid>
          </StyledGrid>
        ) : (
          <StyledGrid container>
            <Grid item xs={7} md={4}>
              <Box display="flex" alignItems="center">
                <Logo src={coverImage} alt="logo" />
                <Typography variant="h5" component="h1">
                  Qias.Me
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3} md={8}>
              {props.children}
            </Grid>
          </StyledGrid>
        )}
      </MainHeader>
    </header>
  );
}

export default Header;
