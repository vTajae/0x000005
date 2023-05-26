import styled from "@mui/styled-engine";

import { TextField, Box, Container, Stack, Button, } from "@mui/material";



export const StyledBox = styled(Box)({
  background: "linear-gradient(to bottom, #adceff, #a0d7ff, #99dffe, #97e6f9, #9decf1, #a8eef4, #b2f0f7, #bcf2fa, #cff1ff, #e1f1ff, #eff2fa, #f5f5f5)",  margin: "auto",
  display: "flex",
  height: "100vh",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "center",
});

export const LoginWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, 0.4)", /* Jordy Blue with 50% opacity */
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  padding: "50px",
  width: "60%",
  maxWidth: "500px",
});

export const FormWrapper = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "30px",
  width: "90%",
});

export const InputWrapper = styled("div")({
  width: "100%",
  marginBottom: "20px",
});

export const StyledButton = styled(Button)({
  width: "100%",
  backgroundColor: "#0077FF",
  color: "#FFFFFF",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#0064D6",
  },
});

export const StyledTextField = styled(TextField)({
  width: "100%",
  "& .MuiInputBase-root": {
    borderRadius: "5px",
    backgroundColor: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#FFFFFF",
    },
    "&.Mui-focused": {
      backgroundColor: "#FFFFFF",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#9B9B9B",
  },
  "& .MuiInputBase-input": {
    color: "#4A4A4A",
  },
});
