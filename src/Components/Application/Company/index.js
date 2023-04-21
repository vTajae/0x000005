import React from "react";
import FormToggle from "../../Application/FormToggle";
import { companyValidationRules } from "../../../utils/validation";

const CompanyForm = () => {

  const companyFormData = {
    Name: "",
    Email: "",
    Phone: "", 
    Address: "",
    Description: "",
  };
  

  const fieldProperties = {
    Name: {
      name: "Company Name",
      type: "text",
      autoComplete: "off",
      placeholder: "Qias.Me LLC",
      grid: { sm: 6, lg: 3 },
    },
    Phone: {
      name: "Company Phone",
      type: "tel",
      autoComplete: "tel",
      placeholder: "123-457-7890",
      grid: { sm: 6, lg: 3 },
    },
    Email: {
      name: "Company Email",
      type: "email",
      autoComplete: "email",
      placeholder: "Example@Email.com",
      grid: { sm: 6, lg: 3 },
    },
    Address: {
      name: "Company Address",
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
      name: "Company Description",
      type: "text",
      autoComplete: "off",
      grid: { sm: 12, lg: 12 },
      multiline: true,
      rows: 1,
    },
  };

  return (
    <FormToggle
      formTitle="Company Registration Form"
      formData={companyFormData}
      validationRules={companyValidationRules}
      fieldProperties={fieldProperties}
    />
  );
};

export default CompanyForm;
