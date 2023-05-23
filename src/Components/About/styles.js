import { Typography, Button, Card, Box } from "@mui/material";
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
  background: "linear-gradient(to top, rgba(173,242,230,1) 4%, rgba(255,255,255,1) 52%)",

});

export const StyledBox2 = styled(StyledBox)({

  background: "linear-gradient( to bottom, rgba(173, 242, 230, 1) 18%, #adceff 88%)",
});

export const StyledBox3 = styled(StyledBox)({

  background: "linear-gradient(to top, rgba(245,245,245,1) 0%, rgba(173,242,230,1) 7%, rgba(173,242,230,1) 69%, #ADCEFF 99%)",

});


export const AboutWrapper = styled(Box)({
  padding: "0 0 0 0",
  // backgroundColor: "#f5f5f5",

});
