import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import {
  Form,
  TextFieldWrapper,
  SubmitButton,
} from "../Registration/styles.js";
import { useValidation } from "../../utils/helpers.js";
import { useAutocomplete, MyAutocomplete } from "./AutoComplete.js";

const ApplicationForm = ({
  expanded,
  formData,
  validationRules,
  fieldProperties,
}) => {
  const { formik, formatPhoneNumber } = useValidation(
    formData,
    validationRules
  );
  const [isAutocompleteVisible, setIsAutocompleteVisible] = useState(expanded);

  const { selectedPlace, options, setSearch, handleAutocompleteChange } =
    useAutocomplete(formik, expanded);

  const textFieldProps = ({ formik, fieldProps }) => {
    const { name } = fieldProps;

    const handleChange = (event) => {
      const { name, value } = event.target;

      if (name.includes("Phone")) {
        const formattedPhoneNumber = formatPhoneNumber(value);
        formik.setFieldValue(name, formattedPhoneNumber);
      } else {
        formik.handleChange(event);
      }
    };

    return {
      ...fieldProps,
      fullWidth: true,
      error: formik.touched[name] && Boolean(formik.errors[name]),
      name: name,
      value: formik.values[name],
      onChange: handleChange,
      onBlur: formik.handleBlur,
      helperText: formik.touched[name] && formik.errors[name],
    };
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        {Object.keys(formData).map((field, index) => {
          const fieldProps = fieldProperties[field];
          const isAddressField = field.includes("Address");
          const isPhoneField = field.includes("Phone");

          const isAutocompleteField =
            isAddressField &&
            expanded &&
            isAutocompleteVisible &&
            options !== undefined;
          return (
            <Grid
              item
              xs={12}
              sm={fieldProps.grid.sm}
              lg={fieldProps.grid.lg}
              key={index}
            >
              {isAutocompleteField ? (
                <MyAutocomplete
                  field={field}
                  formik={formik}
                  options={options}
                  selectedPlace={selectedPlace}
                  handleAutocompleteChange={handleAutocompleteChange}
                  label={fieldProps.label}
                  autocompleteProps={fieldProps.autocompleteProps}
                  key={index}
                />
              ) : isPhoneField ? (
                <>
                  <TextFieldWrapper
                    {...textFieldProps({
                      field,
                      formik,
                      fieldProps,
                      fieldName: field,
                    })}
                  />
                </>
              ) : (
                <TextFieldWrapper
                  {...textFieldProps({
                    field,
                    formik,
                    fieldProps,
                    fieldName: field,
                  })}
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
            onSubmit={formik.onSubmit}
          >
            Submit
          </SubmitButton>
        </Grid>
      </Grid>
    </Form>
  );
};

export default ApplicationForm;
