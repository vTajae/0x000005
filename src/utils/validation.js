// Define a mapping of field names to validation rules
export const companyValidationRules = {
  Name: {
    required: true,
    pattern: /^[a-zA-Z ,.]{1,20}$/,
    errorMessage: "Special Characters Not Allowed",
  },
  Phone: {
    required: true,
    pattern: /^\d{3}-\d{3}-\d{4}$/,
    errorMessage: "Invalid phone number (format: 123-456-7890)",
  },
 Email: {
    required: true,
    pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    errorMessage: "Invalid email address (format: Example@Email.com)",
  },
 Address: {
    required: true,
    errorMessage: "Address is required",
  },
 Description: {
    required: true,
    pattern: null,
    errorMessage: "Description is required",
  },
};

export const parentValidationRules = {
  Name: {
    required: true,
    pattern: /^[a-zA-Z ,.]{1,20}$/,
    errorMessage: "Special Characters Not Allowed",
  },
  Phone: {
    required: true,
    pattern: /^\d{3}-\d{3}-\d{4}$/,
    errorMessage: "Invalid phone number (format: 123-456-7890)",
  },
  Email: {
    required: true,
    pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    errorMessage: "Invalid email address (format: Example@Email.com)",
  },
  Address: {
    required: true,
    errorMessage: "Address is required",
  },
  Description: {
    required: true,
    errorMessage: "Description is required",
  },
};

