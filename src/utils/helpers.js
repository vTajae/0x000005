import { useState } from "react";
import { useFormik } from "formik";

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function validateEmail(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function removeHyphensAndCapitalize(string) {
  return string
    .replace(/-/g, " ")
    .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
}

export function pluralize(name, count) {
  if (count === 1) {
    return name;
  }
  return name + "s";
}

export const useValidation = (
  initialValues,
  validationRules,
) => {
  const [formState, setFormState] = useState(initialValues);
  const [formValid, setFormValid] = useState(false);

  const validateFunc = (values) => {
    const errors = {};

    // Loop through each field and apply its corresponding validation rule
    Object.entries(values).forEach(([fieldName, fieldValue]) => {
      const rules = validationRules[fieldName];
    
      if (rules && rules.required && !fieldValue) {
        errors[fieldName] = `${fieldName} is required`;
      } else if (
        !fieldName.includes("Email") &&
        fieldValue &&
        !/^[a-zA-Z0-9\s.,'-]+$/.test(fieldValue)
      ) {
        errors[fieldName] = "Input contains invalid characters";
      } else if (
        rules &&
        rules.pattern &&
        fieldValue &&
        !rules.pattern.test(fieldValue)
      ) {
        errors[fieldName] = rules.errorMessage;
      }
    });
    

    return errors;
  };

  const formik = useFormik({
    initialValues: initialValues,
    validate: validateFunc,
    validateOnBlur: true,
    onSubmit: (values) => {
      formik.validateForm().then(() => {
        if (formik.isValid) {
          setFormState(values);
          setFormValid(true);
          console.log("Form is valid");
          console.table(values);
          // Do something with the form data
        } else {
          setFormValid(false);
          console.log("Form is invalid");
          console.log(formik.errors);
        }
      });
    },
  });

  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/\D/g, "");
    const formattedNumber =
      phoneNumber.length >= 10
        ? `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
            3,
            6
          )}-${phoneNumber.slice(6, 10)}`
        : phoneNumber;

    return formattedNumber;
  };

  return {
    formState,
    formValid,
    formik,
    formatPhoneNumber,
    validateFunc,
  };
};

// export function idbPromise(storeName, method, object) {
//   return new Promise((resolve, reject) => {
//     const request = window.indexedDB.open('shop-shop', 1);
//     let db, tx, store;
//     request.onupgradeneeded = function(e) {
//       const db = request.result;
//       db.createObjectStore('products', { keyPath: '_id' });
//       db.createObjectStore('categories', { keyPath: '_id' });
//       db.createObjectStore('cart', { keyPath: '_id' });
//     };

//     request.onerror = function(e) {
//       console.log('There was an error');
//     };

//     request.onsuccess = function(e) {
//       db = request.result;
//       tx = db.transaction(storeName, 'readwrite');
//       store = tx.objectStore(storeName);

//       db.onerror = function(e) {
//         console.log('error', e);
//       };

//       switch (method) {
//         case 'put':
//           store.put(object);
//           resolve(object);
//           break;
//         case 'get':
//           const all = store.getAll();
//           all.onsuccess = function() {
//             resolve(all.result);
//           };
//           break;
//         case 'delete':
//           store.delete(object._id);
//           break;
//         default:
//           console.log('No valid method');
//           break;
//       }

//       tx.oncomplete = function() {
//         db.close();
//       };
//     };
//   });
// }

