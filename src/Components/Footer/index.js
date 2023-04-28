import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Grid, Stack } from "@mui/material";
import {
  MyFooter,
  StyledLink,
  MyIcons,
  StyledIcon,
  ContactLink,
  FooterWrapper,
  FooterLinksStyles,
  FooterLinkWrapper,
  ContactFooterWrapper,
} from "./styles";
import "./footer.scss";  

function withScrolling(Component) {
  return function ScrollableComponent(props) {
    const [isScrolling, setIsScrolling] = useState(false);

    const handleLinkClick = () => {
      if (!isScrolling) {
        setIsScrolling(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    };

    return <Component {...props} handleLinkClick={handleLinkClick} />;
  };
}

function FooterLink({ to, children, handleLinkClick }) {
  const handleClick = () => {
    if (handleLinkClick) {
      handleLinkClick();
    }
  };

  return (
    <StyledLink to={to} onClick={handleClick}>
      {children}
    </StyledLink>
  );
}

function FooterLinks(props) {
  const { handleLinkClick } = props;

  return (
    <FooterLinksStyles spacing={1} direction="column">
      <FooterLink to="/" handleLinkClick={handleLinkClick}>
        Home
      </FooterLink>
      <FooterLink to="/about" handleLinkClick={handleLinkClick}>
        About Us
      </FooterLink>
      <FooterLink to="/services" handleLinkClick={handleLinkClick}>
        Services
      </FooterLink>
      <FooterLink to="/blog" handleLinkClick={handleLinkClick}>
        Blog
      </FooterLink>
      <FooterLink to="/referrals" handleLinkClick={handleLinkClick}>
        Referral Program
      </FooterLink>
      <FooterLink to="/careers" handleLinkClick={handleLinkClick}>
        Careers
      </FooterLink>
    </FooterLinksStyles>
  );
}

const ScrollableFooterLinks = withScrolling(FooterLinks);

function ContactInfo(props) {
  const { address, phone, email, handleLinkClick } = props;

  // Split the address into multiple lines using comma as delimiter
  const addressLines = address.split("\n");

  return (
    <Stack spacing={1}>
      <FooterLink to="/contact" handleLinkClick={handleLinkClick} className="contact-link">
        Contact Us
      </FooterLink>
      {addressLines.map((line, index) => (
        <p key={index}>{line.trim()}</p>
      ))}
      <p>{phone}</p>
      <p>{email}</p>
    </Stack>
  );
}

const ScrollableContactInfo = withScrolling(ContactInfo);

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
          <Grid
            container
            spacing={4}
            alignItems="baseline"
            justifyContent={"center"}
          >
            <FooterLinkWrapper item xs={12} sm={4} md={4} lg={2}>
              <ScrollableFooterLinks />
            </FooterLinkWrapper>
            <ContactFooterWrapper item xs={12} sm={4} md={4} lg={3}>
              <ScrollableContactInfo
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
