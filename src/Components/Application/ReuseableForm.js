import React, { useState, useEffect } from "react";
import { Grid, Autocomplete } from "@mui/material";
import {
  Form,
  TextFieldWrapper,
  SubmitButton,
} from "../Registration/styles.js";
import { useValidation } from "../../utils/helpers.js";
import useAutocomplete from "./AutoComplete.js";

const textFieldProps = ({ field, formik, fieldProps }) => ({
  ...fieldProps,
  fullWidth: true,
  error: formik.touched[field] && Boolean(formik.errors[field]),
  name: field,
  value: formik.values[field],
  onChange: formik.handleChange,
  helperText: formik.touched[field] && formik.errors[field],
});

const ApplicationForm = ({
  expanded,
  formTitle,
  formData,
  validationRules,
  fieldProperties,
}) => {
  const { formik } = useValidation(formData, validationRules);
  const [isAutocompleteVisible, setIsAutocompleteVisible] = useState(expanded);

  const { selectedPlace, options, setSearch, handleAutocompleteChange } =
    useAutocomplete(formik, expanded);

  useEffect(() => {
    formik.validateForm();
  }, []);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        {Object.keys(formData).map((field, index) => {
          const fieldProps = fieldProperties[field];
          return (
            <Grid
              item
              xs={12}
              sm={fieldProps.grid.sm}
              lg={fieldProps.grid.lg}
              key={index}
            >
              {expanded && isAutocompleteVisible && options !== undefined ? (
                <Autocomplete
                  {...fieldProps.autocompleteProps}
                  options={options}
                  autoComplete
                  value={selectedPlace || formik.values[field]}
                  onChange={handleAutocompleteChange}
                  onInputChange={(newInputValue) => {
                    setSearch(newInputValue);
                    formik.setFieldValue(field, newInputValue);
                  }}
                  renderInput={(params) => (
                    <TextFieldWrapper
                      {...params}
                      {...textFieldProps({ field, formik, fieldProps })}
                    />
                  )}
                />
              ) : (
                <TextFieldWrapper
                  {...textFieldProps({ field, formik, fieldProps })}
                />
              )}
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <SubmitButton
            variant="contained"
            color="primary"
            type="submit"
            onSubmit={formik.submitForm}
          >
            Submit
          </SubmitButton>
        </Grid>
      </Grid>
    </Form>
  );
};

export default ApplicationForm;
