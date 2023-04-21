import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, Container, Grid, Stack } from "@mui/material";
import {
  MyFooter,
  StyledLink,
  MyIcons,
  StyledIcon,
  ContactLink,
  FooterWrapper,
  FooterLinksStyles,
  FooterLinkWrapper,
  ContactFooterWrapper
} from "./styles";

function ContactInfo(props) {
  const { address, phone, email } = props;

  // Split the address into multiple lines using comma as delimiter
  const addressLines = address.split("\n");

  return (
    <Stack spacing={1}>
      <ContactLink to="/contact">Contact Us</ContactLink>
      {addressLines.map((line, index) => (
        <p key={index}>{line.trim()}</p>
      ))}
      <p>{phone}</p>
      <p>{email}</p>
    </Stack>
  );
}

function FooterLink({ to, children }) {
  return <StyledLink to={to}>{children}</StyledLink>;
}

function FooterLinks(props) {
  return (
    <FooterLinksStyles spacing={1} direction="column">
      <FooterLink to="/">Home</FooterLink>
      <FooterLink to="/about">About Us</FooterLink>
      <FooterLink to="/services">Services</FooterLink>
      <FooterLink to="/blog">Blog</FooterLink>
      <FooterLink to="/referrals">Referral Program</FooterLink>
      <FooterLink to="/careers">Careers</FooterLink>
    </FooterLinksStyles>
  );
}

function Footer(props) {
  // Replace links with social media profiles
  const icons = [
    {
      name: faLinkedin,
      link: "https://www.linkedin.com/Qias.Me",
    },
    {
      name: faInstagram,
      link: "https://instagram.com/Qias.Me",
    },
    {
      name: faGithub,
      link: "https://github.com/QiasAlizada",
    },
  ];

  return (
    <footer>
    <MyFooter>
      <FooterWrapper>
        <Grid container spacing={4} alignItems="baseline" justifyContent={'center'}>
          <FooterLinkWrapper item xs={12} sm={4} md={4} lg={2}>
            <FooterLinks />
          </FooterLinkWrapper>
          <ContactFooterWrapper item xs={12} sm={4} md={4} lg={3}>
            <ContactInfo
              address={
                "3422 Business Center Dr.\n Suite 100, Unit 97\n Pearland, USA 77583"
              }
              phone="(213) 316-8984"
              email="Support@Qias.me"
            />
          </ContactFooterWrapper>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Stack spacing={1}>
              <h3>Follow Us</h3>
              {icons.map((icon) => (
                <MyIcons key={icon.link}>
                  <StyledIcon
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={icon.name} />
                  </StyledIcon>
                </MyIcons>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <Stack spacing={1}>
              <h3>Join Our Newsletter</h3>
              <p>
                Subscribe to our newsletter for the latest news and updates:
              </p>
              <form>
                <input type="text" placeholder="Your Email Address" />
                <button type="submit">Subscribe</button>
              </form>
            </Stack>
          </Grid>
        </Grid>
      </FooterWrapper>
    </MyFooter>
    </footer>
  );
}

export default Footer;
