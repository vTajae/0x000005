import styled from "@mui/styled-engine";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const StyledLogin = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "50px",
});

export const LoginWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#F7F7F7",
  padding: "50px",
  borderRadius: "10px",
  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
});

export const FormWrapper = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "30px",
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
