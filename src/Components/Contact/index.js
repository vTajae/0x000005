import React, { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Box,
  Paper,
} from "@mui/material";
import { validateEmail } from "../../utils/helpers";
import { StyledBox, Form, FormWrapper } from "./styles";
import { StyledTextField } from "../Login/styles";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <StyledBox>
      <FormWrapper>
      <Form id="contact-form" onSubmit={handleSubmit}>
        <Grid container xs={12} spacing={2}>
          <Grid item xs={12} textAlign={"center"}>
          <h2>Contact Form</h2>
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              label="Name"
              name="name"
              value={name}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              label="Email address"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              label="Message"
              name="message"
              multiline
              rows={5}
              value={message}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          {errorMessage && (
            <Grid item xs={12}>
              <Typography variant="body1" color="error">
                {errorMessage}
              </Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Form>
      </FormWrapper>
    </StyledBox>
  );
}

export default Contact;
