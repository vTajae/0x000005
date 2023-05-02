import React, { useState } from "react";
import coverImage from "../../assets/logo.svg";
import { MainHeader, StyledGrid, StyledDrawer, Logo } from "./styles";
import {
  Grid,
  IconButton,
  Drawer,
  MenuIcon,
  Typography,
  Box,
  ListItem,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import useMediaQuery from "@mui/material/useMediaQuery";

function Header(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const smallScreen = useMediaQuery("(max-width:900px)");

  return (
    <header>
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
