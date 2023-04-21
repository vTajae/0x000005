import React from "react";
import { Grid } from "@mui/material";
import {
  Form,
  TextFieldWrapper,
  SubmitButton,
} from "../Registration/styles.js";
import { useValidation } from "../../utils/helpers.js";
import { useAutocomplete, MyAutocomplete } from "./AutoComplete.js";

const handleChange = (formik, name, formatPhoneNumber) => (event) => {
  const { value } = event.target;
  if (name.includes("Phone")) {
    const formattedPhoneNumber = formatPhoneNumber(value);
    formik.setFieldValue(name, formattedPhoneNumber);
  } else {
    formik.setFieldValue(name, value);
  }
};

const textFieldProps = (formik, name, formatPhoneNumber) => ({
  fullWidth: true,
  error: formik.touched[name] && Boolean(formik.errors[name]),
  name,
  value: formik.values[name] || "",
  onBlur: formik.handleBlur,
  onChange: handleChange(formik, name, formatPhoneNumber),
  helperText: formik.touched[name] && formik.errors[name],
});


const ApplicationForm = React.memo(
  ({ expanded, formData, validationRules, fieldProperties }) => {
    const { formik, formatPhoneNumber } = useValidation(formData, validationRules, fieldProperties);

    const { selectedPlace, options, setSearch, handleAutocompleteChange } =
      useAutocomplete(formik, expanded);

    const fields = React.useMemo(
      () =>
        Object.keys(formData).map((field) => {
          const fieldProps = fieldProperties[field] || {};
          const isAddressField = field.includes("Address");

          const isAutocompleteField =
            isAddressField && expanded && options !== undefined;
          return (
            <Grid
              item
              xs={12}
              sm={fieldProps.grid?.sm || 6}
              lg={fieldProps.grid?.lg || 3}
              key={field}
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
                  setSearch={setSearch}
                />
              ) : (
                <TextFieldWrapper
                {...textFieldProps(formik, field, formatPhoneNumber)}
                label={fieldProps.name}
                type={fieldProps.type || "text"}
                autoComplete={fieldProps.autoComplete || "off"}
                placeholder={fieldProps.placeholder}
                multiline={fieldProps.multiline}
                rows={fieldProps.rows}
              />              
              )}
            </Grid>
          );
        }),
      [
        formData,
        fieldProperties,
        formik,
        expanded,
        options,
        selectedPlace,
        handleAutocompleteChange,
        setSearch,
      ]
    );

    return (
      <Form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          {fields}
          <Grid item xs={12}>
            <SubmitButton variant="contained" color="primary" type="submit">
              Submit
            </SubmitButton>
          </Grid>
        </Grid>
      </Form>
    );
  }
);

export default ApplicationForm;
