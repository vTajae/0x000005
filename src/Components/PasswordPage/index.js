import React, { useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { FormContainer, Form, StyledTextField, StyledButton } from "./styles";

const PasswordProtectedPage = ({ onAuthentication }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate password using Yup schema
    const schema = Yup.object().shape({
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    });

    schema
      .validate({ password })
      .then(() => {
        // Password is valid, call the onAuthentication function to authenticate the user
        onAuthentication(password);
        // Navigate to the desired page (change this to the page you want to show after successful authentication)
        navigate("/");
      })
      .catch((error) => {
        // Password is invalid, display error message to user
        setError(error.message);
      });
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <StyledTextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          error={Boolean(error)}
          helperText={error}
        />
        <StyledButton type="submit" variant="contained">
          Submit
        </StyledButton>
      </Form>
    </FormContainer>
  );
};

export default PasswordProtectedPage;
