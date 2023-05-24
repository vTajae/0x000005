import { Typography, Button, Card, Box, Paper } from "@mui/material";
import { styled } from "@mui/system";

export const SectionTitle = styled(Typography)({
  marginBottom: "1rem",
  padding: "1rem 0",
});

export const StyledCard = styled(Card)({
  borderRadius: "12px",
});

export const StyledButton = styled(Button)({
  borderRadius: "24px",
  textTransform: "none",
});

export const StyledBox = styled(Box)({
  padding: "4rem 2.5rem",
  margin: "0 auto",
  background:
    "linear-gradient(to top, rgba(173,242,230,1) 4%, rgba(255,255,255,1) 52%)",
});

export const StyledBox2 = styled(StyledBox)({
  background: "rgba(173,242,230,1)",
  padding: "4rem 2.5rem",

});

export const TranslucentContainer = styled(Paper)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.8)",
  boxShadow: `0px 8px 20px rgba(0, 0, 0, 0.1),
              0px 12px 40px rgba(0, 0, 0, 0.1),
              inset 0px 0px 20px rgba(255, 255, 255, 0.2)`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
}));

export const StyledBox3 = styled(StyledBox)({
  background: "linear-gradient(to bottom, #adf2e6 4%,#adf2e6 89%,#f5f5f5 100%)"
});

export const AboutWrapper = styled(Box)({
  padding: "0 0 0 0",
  // backgroundColor: "#f5f5f5",
});
