import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { validate } from "email-validator";
import {
  Grid,
  Typography,
  Box,
  MenuItem,
  Container,
  TextField,
  Autocomplete,
} from "@mui/material";
import {
  Form,
  TextFieldWrapper,
  SubmitButton,
  FormContainer,
} from "./styles";
import { LoadScript, useLoadScript } from "@react-google-maps/api";

const libraries = ["places"];
const googleMapsApiKey = process.env.GOOGLE_API_KEY;

const formData = {
  contact: {
    fname: {
      label: "Contact First Name",
      value: "",
      placeholder: "John",
    },
    lname: {
      label: "Contact Last Name",
      value: "",
      placeholder: "Doe",
    },
    email: {
      label: "Contact Email",
      value: "",
      placeholder: "JohnDoe@Email.com",
    },
    phone: {
      label: "Contact Phone Number",
      value: "",
      placeholder: "123-456-7890",
    },
    address: {
      label: "Address",
      value: "",
      placeholder: "123 Main St",
    },
  },
  student: {
    fname: {
      label: "Student First Name",
      value: "",
      placeholder: "John",
    },
    lname: {
      label: "Student Last Name",
      value: "",
      placeholder: "Doe",
    },
    email: {
      label: "Student Email",
      value: "",
      placeholder: "JohnDoe@Email.com",
    },
    phone: {
      label: "Student Phone Number",
      value: "",
      placeholder: "123-456-7890",
    },
    subject: {
      label: "Subject",
      value: "",
      options: [
        {
          label: "Math",
          courses: [
            "Algebra 1",
            "Algebra 2",
            "Precalculus",
            "Geometry",
            "Linear Algebra",
            "Statistics",
            "Other",
          ],
        },
        {
          label: "Computer Science",
          courses: [
            "Software Engineering",
            "Web Development",
            "Algorithms and Data Structures",
            "Database Systems",
            "Artificial Intelligence",
            "Computer Security",
            "Cloud Computing",
            "Blockchain Technology",
            "Python",
            "Javascript",
            "DreamWeaver",
            "HTML",
            "CSS",
            "Other",
          ],
        },
      ],
      placeholder: "Subject",
    },
    course: {
      label: "Course",
      value: "",
      options: [],
      placeholder: "Course",
    },
  },
  main: {
    referral: {
      label: "Referral Code",
      value: "",
      placeholder: "123456",
    },
  },
};

const Enroll = () => {
  const [form, setForm] = useState(formData);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [formValid, setFormValid] = useState(false);

  // For Google API

  const [selectedPlace, setSelectedPlace] = useState(null);
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState([]);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey,
    libraries,
  });

  const formik = useFormik({
    initialValues: {
      contactFname: form.contact.fname.value,
      contactLname: form.contact.lname.value,
      contactEmail: form.contact.email.value,
      contactPhone: form.contact.phone.value,
      contactAddress: form.contact.address.value,
      studentFname: form.student.fname.value,
      studentLname: form.student.lname.value,
      studentEmail: form.student.email.value,
      studentPhone: form.student.phone.value,
      studentSubject: form.student.subject.value,
      studentCourse: form.student.course.value,
    },
    validate: (values) => {
      const errors = {};
      const studentFields = [
        {
          phone: values.studentPhone,
          email: values.studentEmail,
          subject: values.studentSubject,
          course: values.studentCourse,
          fname: values.studentFname,
          lname: values.studentLname,
        },
      ];
      const contactFields = [
        {
          phone: values.contactPhone,
          email: values.contactEmail,
          fname: values.contactFname,
          lname: values.contactLname,
          address: values.contactAddress,
        },
      ];

      studentFields.forEach((field) => {
        if (field.fname && !/^[a-zA-Z]{1,20}$/.test(field.fname)) {
          errors.contactFname = "Special Characters Not Allowed";
        }
        if (field.lname && !/^[a-zA-Z]{1,20}$/.test(field.lname)) {
          errors.contactLname = "Special Characters Not Allowed";
        }
        if (
          !field.phone &&
          !field.email &&
          !field.fname &&
          !field.lname &&
          !field.subject &&
          !field.course
        ) {
          errors.studentPhone = "Phone is required";
          errors.studentEmail = "Email is required";
          errors.studentFname = "First Name is required";
          errors.studentLname = "Last Name is required";
          errors.studentSubject = "Subject is required";
          errors.studentCourse = "Course is required";
        }
        if (field.phone && !/^\d{3}-\d{3}-\d{4}$/.test(field.phone)) {
          errors.studentPhone = "Invalid phone number (format: 123-456-7890)";
        }
        if (field.email && !validate(field.email)) {
          errors.studentEmail =
            "Invalid email address (format: Example@Email.com)";
        }
      });

      contactFields.forEach((field) => {
        if (field.fname && !/^[a-zA-Z]{1,20}$/.test(field.fname)) {
          errors.contactFname = "Special Characters Not Allowed";
        }
        if (field.lname && !/^[a-zA-Z]{1,20}$/.test(field.lname)) {
          errors.contactLname = "Special Characters Not Allowed";
        }
        if (
          !field.phone &&
          !field.email &&
          !field.fname &&
          !field.lname &&
          !field.address
        ) {
          errors.contactPhone = "Phone is required";
          errors.contactEmail = "Email is required";
          errors.contactFname = "First Name is required";
          errors.contactLname = "Last Name is required";
          errors.contactAddress = "Address is required";
        }
        if (field.phone && !/^\d{3}-\d{3}-\d{4}$/.test(field.phone)) {
          errors.contactPhone = "Invalid phone number (format: 123-456-7890)";
        }
        if (field.email && !validate(field.email)) {
          errors.contactEmail =
            "Invalid email address (format: Example@Email.com)";
        }
        if (
          field.address &&
          !/^[^!@#$%^&*()_+=[\]{};':"\\|<>/?]*$/.test(field.address)
        ) {
          errors.contactAddress = "Invalid Address";
        }
      });

      return errors;
    },
    onSubmit: (values) => {
      if (Object.keys(formik.errors).length === 0) {
        setFormValid(true);
        console.log("Form is valid");
        console.table(values);
      } else {
        console.log("Form is invalid");
        console.log(formik.errors);
      }
    },
    validateOnBlur: true,
    validateOnChange: false,
  });

  useEffect(() => {
    let active = true;
    if (!isLoaded || loadError) return undefined;

    const service = new window.google.maps.places.AutocompleteService();
    if (!search) return setOptions([]);

    service.getPlacePredictions({ input: search }, (results) => {
      if (active) {
        if (!results) return; // Check for null results and return early
        setOptions(results.map((result) => result.description));
      }
    });

    return () => {
      active = false;
    };
  }, [search, isLoaded, loadError]);

  const handleAutocompleteChange = (event, newValue) => {
    if (newValue) {
      setSelectedPlace(newValue);
      formik.setFieldValue("contactAddress", newValue);
    }
  };

  const formatPhoneNumber = (fieldName, e) => {
    const phoneNumber = e.target.value.replace(/\D/g, "");
    const formattedNumber =
      phoneNumber.length >= 10
        ? `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
            3,
            6
          )}-${phoneNumber.slice(6, 10)}`
        : phoneNumber;
    formik.setFieldValue(fieldName, formattedNumber);
  };

  const handleSubjectChange = (event) => {
    const selectedSubject = event.target.value;
    setSelectedSubject(selectedSubject);
    const courses = form.student.subject.options.find(
      (option) => option.label === selectedSubject
    ).courses;
    setForm((form) => ({
      ...form,
      student: {
        ...form.student,
        subject: {
          ...form.student.subject,
          value: selectedSubject,
        },
        course: {
          ...form.student.course,
          options: courses,
          value: formik.values.studentCourse,
        },
      },
    }));
    formik.setFieldValue("studentSubject", selectedSubject);
  };

  const handleCourseChange = (event) => {
    const selectedCourse = event.target.value;
    setForm((form) => ({
      ...form,
      student: {
        ...form.student,
        course: {
          ...form.student.course,
          value: selectedCourse,
        },
      },
    }));
    formik.setFieldValue("studentCourse", selectedCourse);
  };

  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={12} md>
          <Typography variant="h3" align="center" gutterBottom>
            Tutoring Service Enrollment Form
          </Typography>
        </Grid>

        <Form onSubmit={formik.handleSubmit}>
          <Grid item xs={12} sm={12} md={12} >
            <Typography variant="h5" sx={{ mb: 2, ml: 2 }}>
              Contact Information
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Grid container spacing={3}>
              {Object.keys(formData.contact).map((field, index) => (
                <Grid item xs={12} sm={6} lg={3} key={index}>
                  {field === "phone" ? (
                    <TextField
                      fullWidth
                      type="tel"
                      error={
                        formik.touched.contactPhone &&
                        Boolean(formik.errors.contactPhone)
                      }
                      onBlur={formik.handleBlur}
                      helperText={
                        <span variant="body2">
                          {formik.touched.contactPhone &&
                            formik.errors.contactPhone}
                        </span>
                      }
                      label={form.contact[field].label}
                      variant="outlined"
                      name="contactPhone"
                      value={formik.values.contactPhone}
                      onChange={(e) => formatPhoneNumber("contactPhone", e)}
                      placeholder={`${form.contact[field].placeholder}`}
                    />
                  ) : field === "email" ? (
                    <TextField
                      fullWidth
                      type="tel"
                      error={
                        formik.touched.contactEmail &&
                        Boolean(formik.errors.contactEmail)
                      }
                      helperText={
                        <span variant="body2">
                          {formik.touched.contactEmail &&
                            formik.errors.contactEmail}
                        </span>
                      }
                      label={form.contact[field].label}
                      variant="outlined"
                      name="contactEmail"
                      value={formik.values.contactEmail}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder={`${form.contact[field].placeholder}`}
                    />
                  ) : field === "fname" ? (
                    <TextFieldWrapper
                      fullWidth
                      error={
                        formik.touched.contactFname &&
                        Boolean(formik.errors.contactFname)
                      }
                      helperText={
                        <span variant="body2">
                          {formik.touched.contactFname &&
                            formik.errors.contactFname}
                        </span>
                      }
                      onBlur={formik.handleBlur}
                      label={formData.contact.fname.label}
                      variant="outlined"
                      name={"contactFname"}
                      value={formik.values.contactFname}
                      onChange={formik.handleChange}
                      placeholder={formData.contact.fname.placeholder}
                    />
                  ) : field === "lname" ? (
                    <TextFieldWrapper
                      fullWidth
                      error={
                        formik.touched.contactLname &&
                        Boolean(formik.errors.contactLname)
                      }
                      helperText={
                        <span variant="body2">
                          {formik.touched.contactLname &&
                            formik.errors.contactLname}
                        </span>
                      }
                      onBlur={formik.handleBlur}
                      label={formData.contact.lname.label}
                      variant="outlined"
                      name={"contactLname"}
                      value={formik.values.contactLname}
                      onChange={formik.handleChange}
                      placeholder={formData.contact.lname.placeholder}
                    />
                  ) : field === "address" ? (
                    <LoadScript
                      googleMapsApiKey={googleMapsApiKey}
                      libraries={libraries}
                    >
                      <Autocomplete
                        freeSolo
                        id="combo-box-demo"
                        options={options}
                        value={selectedPlace || formik.values.contactAddress}
                        onChange={handleAutocompleteChange}
                        onInputChange={(event, newInputValue) => {
                          setSearch(newInputValue);
                          formik.setFieldValue("contactAddress", newInputValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            onChange={formik.handleChange}
                            placeholder={formData.contact.address.placeholder}
                            {...params}
                            name="contactAddress"
                            label={form.contact[field].label}
                            error={
                              formik.touched.contactAddress &&
                              Boolean(formik.errors.contactAddress)
                            }
                            helperText={
                              formik.touched.contactAddress &&
                              formik.errors.contactAddress
                            }
                            onBlur={formik.handleBlur}
                          />
                        )}
                      />
                    </LoadScript>
                  ) : null}
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={12} >
            <Typography variant="h5" sx={{ margin: 2 }}>
              Student Information
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Grid container spacing={3}>
              {Object.keys(formData.student)
                .filter((field) => field)
                .map((field, index) => (
                  <Grid item xs={12} sm={6} lg={3} key={index}>
                    {field === "phone" ? (
                      <TextField
                        fullWidth
                        type="tel"
                        error={
                          formik.touched.studentPhone &&
                          Boolean(formik.errors.studentPhone)
                        }
                        onBlur={formik.handleBlur}
                        helperText={
                          <span variant="body2">
                            {formik.touched.studentPhone &&
                              formik.errors.studentPhone}
                          </span>
                        }
                        label={form.student[field].label}
                        variant="outlined"
                        name="studentPhone"
                        value={formik.values.studentPhone}
                        onChange={(e) => formatPhoneNumber("studentPhone", e)}
                        placeholder={`${form.student[field].placeholder}`}
                      />
                    ) : field === "email" ? (
                      <TextField
                        fullWidth
                        type="tel"
                        error={
                          formik.touched.studentEmail &&
                          Boolean(formik.errors.studentEmail)
                        }
                        onBlur={formik.handleBlur}
                        helperText={
                          <span variant="body2">
                            {formik.touched.studentEmail &&
                              formik.errors.studentEmail}
                          </span>
                        }
                        label={form.student[field].label}
                        variant="outlined"
                        name="studentEmail"
                        value={formik.values.studentEmail}
                        onChange={formik.handleChange}
                        placeholder={`${form.student[field].placeholder}`}
                      />
                    ) : field === "fname" ? (
                      <TextFieldWrapper
                        fullWidth
                        error={
                          formik.touched.studentFname &&
                          Boolean(formik.errors.studentFname)
                        }
                        helperText={
                          <span variant="body2">
                            {formik.touched.studentFname &&
                              formik.errors.studentFname}
                          </span>
                        }
                        onBlur={formik.handleBlur}
                        label={formData.student.fname.label}
                        variant="outlined"
                        name={"studentFname"}
                        value={formik.values.studentFname}
                        onChange={formik.handleChange}
                        placeholder={formData.student.fname.placeholder}
                      />
                    ) : field === "lname" ? (
                      <TextFieldWrapper
                        fullWidth
                        error={
                          formik.touched.studentLname &&
                          Boolean(formik.errors.studentLname)
                        }
                        helperText={
                          <span variant="body2">
                            {formik.touched.studentLname &&
                              formik.errors.studentLname}
                          </span>
                        }
                        onBlur={formik.handleBlur}
                        label={formData.student.lname.label}
                        variant="outlined"
                        name={"studentLname"}
                        value={formik.values.studentLname}
                        onChange={formik.handleChange}
                        placeholder={formData.student.lname.placeholder}
                      />
                    ) : field === "subject" ? (
                      <React.Fragment>
                        <Grid item xs={12} sm={12} md={12}>
                          <TextFieldWrapper
                            fullWidth
                            error={
                              formik.touched.studentSubject &&
                              Boolean(formik.errors.studentSubject)
                            }
                            helperText={
                              <span variant="body2">
                                {formik.touched.studentSubject &&
                                  formik.errors.studentSubject}
                              </span>
                            }
                            onBlur={formik.handleBlur}
                            label={formData.student.subject.label}
                            variant="outlined"
                            name="studentSubject"
                            value={formik.values.studentSubject}
                            onChange={handleSubjectChange}
                            placeholder={`${formData.student.subject.placeholder}`}
                            select={true}
                          >
                            {formData.student.subject.options.map(
                              (option, index) => (
                                <MenuItem key={index} value={option.label}>
                                  {option.label}
                                </MenuItem>
                              )
                            )}
                          </TextFieldWrapper>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          {selectedSubject && (
                            <TextFieldWrapper
                              fullWidth
                              error={
                                formik.touched.studentCourse &&
                                Boolean(formik.errors.studentCourse)
                              }
                              helperText={
                                <span variant="body2">
                                  {formik.touched.studentCourse &&
                                    formik.errors.studentCourse}
                                </span>
                              }
                              onBlur={formik.handleBlur}
                              label={form.student.course.label}
                              variant="outlined"
                              name="studentCourse"
                              value={form.student.course.value}
                              onChange={handleCourseChange}
                              placeholder={`${form.student.course.placeholder}`}
                              select={true}
                            >
                              {form.student.course.options.map(
                                (option, index) => (
                                  <MenuItem key={index} value={option}>
                                    {option}
                                  </MenuItem>
                                )
                              )}
                            </TextFieldWrapper>
                          )}
                        </Grid>
                      </React.Fragment>
                    ) : null}
                  </Grid>
                ))}
            </Grid>
            <SubmitButton type="submit">Submit</SubmitButton>
          </Grid>
        </Form>
        <Grid item xs={12} sm={12} md={12}>
          {/* <Box m={3}>
          <Typography variant="subtitle1">
            Example text for the First Name field: "John"
          </Typography>
          <Typography variant="subtitle1">
            Example text for the Last Name field: "Doe"
          </Typography>
          <Typography variant="subtitle1">
            Example text for the Email field: "example@email.com"
          </Typography>
          <Typography variant="subtitle1">
            Example text for the Phone Number field: "(123) 456-7890"
          </Typography>
          <Typography variant="subtitle1">
            Example text for the Referral field: "ABC123"
          </Typography>
        </Box> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Enroll;
