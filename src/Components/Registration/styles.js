import styled from "styled-components";
import { TextField, Box, Container, Stack, } from "@mui/material";

export const Form = styled.form`
  padding: 20px;
  border-radius: 5px;
`;


export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-width: 250px;
`;



export const TextFieldWrapper = styled(TextField)`
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #0077c8;
    }
    &:hover fieldset {
      border-color: #0077c8;
    }
    &.Mui-focused fieldset {
      border-color: #0077c8;
    }
  }
`;

export const SubmitButton = styled.button`
  background-color: #0077c8;
  color: white;
  &:hover {
    background-color: #0077c8;
  }
  margin-top: 20px;
`;


export const RegistrationWrapper = styled(Box)({
  padding: "0 0 5% 0",
  // backgroundColor: "#f5f5f5",

});


export const StyledBox = styled(Box)({
  padding: "4rem 1rem",
  margin: "0 auto",
});
