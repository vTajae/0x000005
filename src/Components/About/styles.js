import { Typography, Button, Card, Box } from "@mui/material";
import { styled } from "@mui/system";

export const SectionTitle = styled(Typography)({
  marginBottom: "1rem",
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
  padding: "5rem 0",
  margin: "0 auto",
  maxWidth: "1200px",
});
