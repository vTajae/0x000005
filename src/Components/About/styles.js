import { Typography, Button, Card, Box } from "@mui/material";
import { styled } from "@mui/system";

export const SectionTitle = styled(Typography)({
  marginBottom: "1rem",
  padding: "1rem 0",

});

export const StyledCard = styled(Card)({
  borderRadius: "12px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
});

export const StyledButton = styled(Button)({
  borderRadius: "24px",
  textTransform: "none",
});

export const StyledBox = styled(Box)({
  padding: "4rem 2.5rem",
  margin: "0 auto",
});


export const AboutWrapper = styled(Box)({
  padding: "0 0 5% 0",
  // backgroundColor: "#f5f5f5",

});
