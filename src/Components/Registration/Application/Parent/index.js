import React from "react";
import FormToggle from "../FormToggle";
import { parentValidationRules } from "../../../../utils/validation";

const ParentForm = () => {

  const parentFormData = {
    Name: "",
    Email: "",
    Phone: "", 
    Address: "",
    Description: "",
  };
  

  const fieldProperties = {
    Name: {
      name: "Parent Name",
      type: "text",
      autoComplete: "off",
      placeholder: "Qias.Me LLC",
      grid: { sm: 6, lg: 3 },
    },
    Phone: {
      name: "Parent Phone",
      type: "tel",
      autoComplete: "tel",
      placeholder: "123-457-7890",
      grid: { sm: 6, lg: 3 },
    },
    Email: {
      name: "Parent Email",
      type: "email",
      autoComplete: "email",
      placeholder: "Example@Email.com",
      grid: { sm: 6, lg: 3 },
    },
    Address: {
      name: "Parent Address",
      type: "text",
      autoComplete: "off",
      placeholder: "123 Main St, New York, New York, 12345",
      grid: { sm: 6, lg: 3 },
      autocompleteprops: {
        freeSolo: true,
        getOptionname: (option) =>
          typeof option === "string" ? option : option.description,
        filterOptions: (x) => x,
        includeInputInList: true,
        filterSelectedOptions: true,
      },
    },
    Description: {
      name: "Parent Description",
      type: "text",
      autoComplete: "off",
      grid: { sm: 12, lg: 12 },
      multiline: true,
      rows: 1,
    },
  };

  return (
    <FormToggle
      formTitle="Parent Registration Form"
      formData={parentFormData}
      validationRules={parentValidationRules}
      fieldProperties={fieldProperties}
    />
  );
};

export default ParentForm;
