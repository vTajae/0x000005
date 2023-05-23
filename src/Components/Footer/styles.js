import styled from "styled-components";
import { Grid, Stack, Box, Container, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const MyFooter = styled(Box)`
  font-size: 1.2rem;
  text-align: center;
  padding: 2rem 0;
  background-color: #f5f5f5;

`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: calc(0.95 rem + 0.3vw);

  &:hover {
    color: #000;
  }

  &.navActive {
    color: #000;
  }
`;

export const StyledIcon = styled(Link)`
  color: #000;
  font-size: 2.3rem;
  text-decoration: none;
  &:hover {
    color: #666;
  }
`;

export const MyIcons = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

// export const FooterLinksStyles = styled(Stack)`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: center;
//   margin: 0;
//   padding: 0;
//   padding-left: 10%;
//   width: 100%;
// `;

export const ContactLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  width: 100%;
  font-size: calc(1.1rem + 0.6vw);

  &:hover {
    color: #000;
  }

  &.navActive {
    color: #000;
  }
`;

export const FooterWrapper = styled(Container)`
  max-width: 1920px;
`;

export const FooterLinksStyles = styled(Stack)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;

  @media (min-width: 600px) and (max-width: 1199px) {
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: calc((100vw - 600px) / 2 * 0.3);
  }

  @media (min-width: 600px) {
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;


export const FooterLinkWrapper = styled(Grid)`
@media (max-width: 600px) {
  display: none;
}
`;

export const FooterLink = styled(StyledLink)`
  @media (min-width: 600px) {
    text-align: left;
    width: auto;
  }
`;

export const ContactFooterWrapper = styled(Grid)`
@media (max-width: 600px) {
  display: none;
}
`;


export const FormContainer = styled('form')({

});

export const EmailInput = styled(TextField)({
});

export const SubmitButton = styled(Button)({
  backgroundColor: '#4CAF50',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#3e8e41',
  },
});


