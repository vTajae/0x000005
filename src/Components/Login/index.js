import React, { useState } from "react";
import {
  LoginWrapper,
  StyledLogin,
  FormWrapper,
  InputWrapper,
  StyledButton,
  StyledTextField,
  StyledBox,
} from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.table({ "email: ": email, "password: ": password });

    // Handle login logic here
  };

  return (
    <StyledBox>
      <LoginWrapper>
        <h2>Login</h2>
        <FormWrapper onSubmit={handleSubmit}>
          
          <InputWrapper>
            <StyledTextField
              label="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              margin="normal"
              required
            />
          </InputWrapper>
          <InputWrapper>
            <StyledTextField
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              margin="normal"
              required
            />
          </InputWrapper>


          <StyledButton variant="contained" type="submit">
            Login
          </StyledButton>
        </FormWrapper>
      </LoginWrapper>
    </StyledBox>
  );
};

export default Login;
