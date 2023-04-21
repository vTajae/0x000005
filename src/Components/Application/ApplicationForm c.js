import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import {
  Form,
  TextFieldWrapper,
  SubmitButton,
} from "../Registration/styles.js";
import { useValidation } from "../../utils/helpers.js";
import { useAutocomplete, MyAutocomplete } from "./AutoComplete.js";

import { useMemo } from "react";

const textFieldProps = ({ formik, fieldProps, formatPhoneNumber}) => {
  const { name } = fieldProps;

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name.includes("Phone")) {
      const formattedPhoneNumber = formatPhoneNumber(value);
      formik.setFieldValue(name, formattedPhoneNumber);
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

const MemoizedTextFieldWrapper = ({ formik, fieldProps, index }) => {
  const props = useMemo(
    () => textFieldProps({ formik, fieldProps }),
    [formik, fieldProps]
  );

  return <TextFieldWrapper {...props} key={index} />;
};

const ApplicationForm = ({
  expanded,
  formTitle,
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

  useEffect(() => {
    formik.validateForm();
  }, []);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        {Object.keys(formData).map((field, index) => {
          const fieldProps = fieldProperties[field];
          const isAddressField = field.includes("Address");
          const isAutocompleteField =
            isAddressField &&
            expanded &&
            isAutocompleteVisible;

          const isPhoneField = field.includes("Phone");

          if (isAutocompleteField) {
            return (
              <MyAutocomplete
                field={field}
                formik={formik}
                options={options}
                selectedPlace={selectedPlace}
                handleAutocompleteChange={handleAutocompleteChange}
                label={fieldProps.label}
                autocompleteProps={fieldProps.autocompleteProps}
                onChange={(newValue) => {
                  setSearch(newValue ? newValue.description : "");
                }}
                onBlur={() => {
                  setSearch(selectedPlace ? selectedPlace.description : "");
                }}
              />
            );
          }
          // else if (isPhoneField) {
          //   return (
          //     <TextFieldWrapper
          //       fullWidth
          //       error={formik.touched[field] && Boolean(formik.errors[field])}
          //       helperText={
          //         <span variant="body2">
          //           {formik.touched[field] && formik.errors[field]}
          //         </span>
          //       }
          //       onBlur={formik.handleBlur}
          //       label={fieldProps.label}
          //       variant="outlined"
          //       name={field}
          //       value={formik.values[field]}
          //       onChange={formik.handleChange}
          //       placeholder={fieldProps.placeholder}
          //       key={index}
          //     />
          //   );
          // }
          else {
            <MemoizedTextFieldWrapper
              formik={formik}
              field={field}
              fieldProps={fieldProps}
              index={index}
            />;
          }
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
