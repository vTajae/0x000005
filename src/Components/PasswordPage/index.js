import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { FormContainer, Form, StyledTextField, StyledButton } from "./styles";

const PasswordProtectedPage = ({ onAuthentication }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [authenticated, setAuthenticated] = useState(false); // new state variable
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the password is saved in local storage
    const savedPassword = localStorage.getItem("password");

    if (savedPassword) {
      // Set the component state with the saved password
      setPassword(savedPassword);
      // Authenticate the user with the saved password
      onAuthentication(savedPassword);
      // Mark the user as authenticated
      setAuthenticated(true);
    }
  }, [onAuthentication]); // The empty array means that this effect will only run once, when the component mounts

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const schema = Yup.object().shape({
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required")
        .test("password", "Invalid password", (value) => {
          // Here you can write your custom validation logic
          // For example, you can compare the value with a predefined correct password
          const correctPassword = "12345678";
          return value === correctPassword;
        }),
    });

    schema
      .validate({ password })
      .then(() => {
        // Password is valid, call the onAuthentication function to authenticate the user
        onAuthentication(password);

        // Save the password to local storage
        localStorage.setItem("password", password);

        // Mark the user as authenticated
        setAuthenticated(true);

        // Navigate to the desired page (change this to the page you want to show after successful authentication)
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError("Invalid password. Please try again.");
      });
  };

  if (authenticated) {
    // Skip the password protection screen if the user has already authenticated
    return null;
  }

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
