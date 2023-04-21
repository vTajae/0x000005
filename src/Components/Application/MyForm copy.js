import useValidation from "./Validation.js";
import { TextField, Grid, Autocomplete,Button, Typography } from "@mui/material";
import {Form, FormContainer, TextFieldWrapper, SubmitButton} from "../Registration/styles.js";
import useAutocomplete from "./AutoComplete";
import React, {useState} from "react";

const formData = {
  Companyemail: "",
  CompanyPhone: "",
  CompanyName: "",
  CompanyAddress: "",
  CompanyDescription: "",
};

const validateFunc = (values) => {
  const errors = {};

  // Define a mapping of field names to validation rules
  const validationRules = {
    CompanyName: {
      required: true,
      pattern: /^[a-zA-Z]{1,20}$/,
      errorMessage: "Special Characters Not Allowed",
    },
    CompanyPhone: {
      required: true,
      pattern: /^\d{3}-\d{3}-\d{4}$/,
      errorMessage: "Invalid phone number (format: 123-456-7890)",
    },
    Companyemail: {
      required: true,
      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      errorMessage: "Invalid email address (format: Example@Email.com)",
    },
    CompanyAddress: {
      required: true,
      errorMessage: "Address is required",
    },
    CompanyDescription: {
      required: true,
      errorMessage: "Description is required",
    },
  };

  // Loop through each field and apply its corresponding validation rule
  Object.entries(values).forEach(([fieldName, fieldValue]) => {
    const rules = validationRules[fieldName];

    if (rules) {
      if (rules.required && !fieldValue) {
        errors[fieldName] = `${fieldName} is required`;
      } else if (
        rules.pattern &&
        fieldValue &&
        !rules.pattern.test(fieldValue)
      ) {
        errors[fieldName] = rules.errorMessage;
      }
    }
  });

  return errors;
};

const MyForm = () => {
  
  const { formState, formValid, formik, formatPhoneNumber } = useValidation(
    formData,
    validateFunc
  );
  const [expanded, setExpanded] = useState(false);
  const { selectedPlace, search, options, setSearch, handleAutocompleteChange } = useAutocomplete(formik, expanded);

  // handle expanded state change
  // const toggleExpanded = () => setExpanded((prevExpanded) => !prevExpanded);

  return (
    <Form onSubmit={formik.handleSubmit}>
    <Grid container spacing={3}>
      {Object.keys(formData).map((field, index) => {
        const fieldProps = {
          fullWidth: true,
          error: formik.touched[field] && Boolean(formik.errors[field]),
          onBlur: formik.handleBlur,
          name: field,
          value: formik.values[field],
          onChange:
            field === "CompanyPhone"
              ? (e) => formatPhoneNumber("CompanyPhone", e)
              : formik.handleChange,
          placeholder:
            field === "CompanyPhone"
              ? "123-457-7890"
              : field === "CompanyName"
              ? "Qias.Me LLC"
              : field === "Companyemail"
              ? "Example@Email.com"
              : "123 Main St, New York, New York, 12345",
        };
        return (
          <Grid item xs={12} sm={6} lg={3} key={index}>
            {field === "CompanyAddress" && !expanded ? null : field === "CompanyAddress" ? (
              <Autocomplete
                freeSolo
                id="combo-box-demo"
                options={options}
                value={selectedPlace || formik.values.CompanyAddress}
                onChange={handleAutocompleteChange}
                onInputChange={(event, newInputValue) => {
                  setSearch(newInputValue);
                  formik.setFieldValue("CompanyAddress", newInputValue);
                }}
                renderInput={(params) => (
                  <TextFieldWrapper
                    {...params}
                    label="Company Address"
                    variant="outlined"
                    {...fieldProps}
                    helperText={formik.touched[field] && formik.errors[field]}
                  />
                )}
              />
            ) : (
              <TextFieldWrapper
                label={
                  field === "CompanyPhone"
                    ? "Phone Number"
                    : field === "CompanyName"
                    ? "Company Name"
                    : "Email Address"
                }
                type={field === "CompanyPhone" ? "tel" : field === "CompanyName" ? "name" : "email"}
                variant="outlined"
                {...fieldProps}
                helperText={formik.touched[field] && formik.errors[field]}
              />
            )}
          </Grid>
        );
      })}
      <Grid item xs={12} sm={12} md={12}>
        <TextFieldWrapper
          fullWidth
          multiline
          error={
            formik.touched.CompanyDescription &&
            Boolean(formik.errors.CompanyDescription)
          }
          onBlur={formik.handleBlur}
          name="CompanyDescription"
          value={formik.values.CompanyDescription}
          onChange={formik.handleChange}
          label="Company Description"
          variant="outlined"
          helperText={formik.touched.CompanyDescription && formik.errors.CompanyDescription}
          placeholder="Brief description of your company"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Grid>
    </Grid>
  </Form>
  
  );
};

export default MyForm;
