import React, { useState, useRef, useEffect } from "react";
import coverImage from "../../assets/logo.svg";
import {
  MainHeader,
  StyledGrid,
  StyledDrawer,
  Logo,
  MainHeaderHome,
  HeaderWrapper
} from "./styles";
import { Grid, IconButton, Typography, Box } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSpring } from "@react-spring/web";
import { withRouter } from "react-router-dom";

function Header(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const headerRef = useRef(null);
  const [animation, setAnimation] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const smallScreen = useMediaQuery("(max-width:900px)");

  const animationProps = useSpring({
    opacity: animation ? 1 : 0,
    transform: animation ? "translateY(0)" : "translateY(-5rem)",
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > prevScrollPos) {
        setAnimation(false);
      } else {
        setAnimation(true);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const ConditionalHeader1 = ({ isHome, children }) => {
    const HeaderComponent = isHome ? MainHeaderHome : MainHeader;

    return (
      <HeaderComponent>
        {/* header content */}
        {children}
      </HeaderComponent>
    );
  };

  return (
    <HeaderWrapper
      ref={headerRef}
      className={props.className}
      style={animationProps}
    >
      <ConditionalHeader1 isHome={props.isHome}>
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
      </ConditionalHeader1>
    </HeaderWrapper>
  );
}

export default Header;
