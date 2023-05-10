import React, { useState, useRef, useEffect } from "react";
import coverImage from "../../assets/logo.png";
import {
  MainHeader,
  StyledGrid,
  StyledDrawer,
  Logo,
  MainHeaderHome,
  HeaderWrapper,
} from "./styles";
import { Grid, IconButton, Typography, Box } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSpring } from "@react-spring/web";

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
}

function Header(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const headerRef = useRef(null);
  const scrollPosition = useScrollPosition();

  const [animation, setAnimation] = useState(1); // initially set to 1

  const HeaderAnimationProps = useSpring({
    opacity: animation,
  });

  useEffect(() => {
    if (scrollPosition !== null) {
      setAnimation(scrollPosition > 0 ? 0 : 1);
    }
  }, [scrollPosition]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const smallScreen = useMediaQuery("(max-width:900px)");

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
      style={HeaderAnimationProps}
    >
    <ConditionalHeader1 isHome={props.isHome}>
{smallScreen ? (
  <StyledGrid container spacing={1}>
    <Grid item xs={8}>
      <Box
        display="flex"
        alignItems="center"
        style={{ padding: "0 100px" }}
      >
        <Logo src={coverImage} alt="logo" />
        <Typography variant="h5" component="h1" sx={{ marginRight: 5 }}>
          Qias.Me
        </Typography>
      </Box>
    </Grid>
    <Grid item xs={4}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        style={{ padding: "0 25px" }}
      >
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
      <Box
        display="flex"
        alignItems="center"
        style={{ padding: "0 100px" }}
      >
        <Logo src={coverImage} alt="logo" />
        <Typography variant="h5">Qias.Me</Typography>
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
