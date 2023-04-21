import { useMutation } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import Auth from "../../utils/auth";
import { ORG_APPLY } from "../../utils/mutations";
import {
  useMediaQuery,
  Grid,
  Typography,
  Box,
  Container,
  Collapse,
  Autocomplete,
  Card,
  CardActions,
  Dialog,
  DialogContent,
  CircularProgress,
} from "@mui/material";

import {
  Form,
  TextFieldWrapper,
  SubmitButton,
  FormContainer,
} from "../../Components/Registration/styles";
import IconButton from "@mui/material/IconButton";
import styled from "@mui/material/styles/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { LoadScript, useLoadScript } from "@react-google-maps/api";
import { useFormik } from "formik";
import { validate } from "email-validator";

const formData = {
  Companyemail: "",
  CompanyPhone: "",
  CompanyName: "",
  CompanyAddress: "",
  CompanyDescription: "",
};

const libraries = ["places"];
const googleMapsApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

// memoize the component and prevent it from re-rendering unnecessarily.
const CompanyApplication = React.memo(() => {
  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const [selectedPlace, setSelectedPlace] = useState(null);
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const [isAutocompleteVisible, setIsAutocompleteVisible] = useState(true); // state variable to track if the autocomplete is visible

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey,
    libraries,
  });

  const [formState, setFormState] = useState(formData);
  const [apply, { error }] = useMutation(ORG_APPLY);
  const [formValid, setFormValid] = useState(false);

  const formik = useFormik({
    initialValues: formState,
    validate: (values) => {
      const errors = {};
      const CompnayAppData = [
        {
          Companyemail: values.Companyemail,
          CompanyPhone: values.CompanyPhone,
          CompanyName: values.CompanyName,
          CompanyDescription: values.CompanyDescription,
          CompanyAddress: values.CompanyAddress,
        },
      ];

      CompnayAppData.forEach((field) => {
        if (field.CompanyName && !/^[a-zA-Z]{1,20}$/.test(field.CompanyName)) {
          errors.CompanyName = "Special Characters Not Allowed";
        }

        if (
          !field.CompanyPhone &&
          !field.Companyemail &&
          !field.CompanyAddress &&
          !field.CompanyDescription &&
          !field.CompanyName
        ) {
          errors.CompanyPhone = "Phone is required";
          errors.Companyemail = "Email is required";
          errors.CompanyAddress = "Address is required";
          errors.CompanyDescription = "Description is required";
          errors.CompanyName = "Name is required";
        }
        if (
          field.CompanyPhone &&
          !/^\d{3}-\d{3}-\d{4}$/.test(field.CompanyPhone)
        ) {
          errors.CompanyPhone = "Invalid phone number (format: 123-456-7890)";
        }
        if (field.Companyemail && !validate(field.Companyemail)) {
          errors.Companyemail =
            "Invalid email address (format: Example@Email.com)";
        }
      });

      return errors;
    },
    handleChange: (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    },

    onSubmit: async (values) => {
      try {

        if (Object.keys(formik.errors).length === 0) {
          setFormValid(true);
          console.log("Form is valid");
          console.table(values);
        } else {
          console.log("Form is invalid");
          console.log(formik.errors);
        }
        setOpenDialog(true);
        setLoading(true);

        const plainPhoneNumber = values.CompanyPhone.replace(/\D/g, "");

        const mutationResponse = await apply({
          variables: {
            input: {
              Companyemail: values.Companyemail,
              CompanyPhone: plainPhoneNumber,
              CompanyName: values.CompanyName,
              CompanyDescription: values.CompanyDescription,
              CompanyAddress: values.CompanyAddress,
            },
          },
        });

        setLoading(false);

        // const token = mutationResponse.data.login.token;

        console.log(mutationResponse.data);
        // Auth.login(token);
      } catch (e) {
        console.log(e);
        console.log(e.message);
        console.log(e.graphQLErrors);
      }
    },
    validateOnBlur: true,
    validateOnChange: false,
  });

  const handleClose = () => {
    setOpenDialog(false);
    window.location.href = "/";
  };

  const handleAutocompleteChange = (event, newValue) => {
    if (newValue) {
      setSelectedPlace(newValue);
      formik.setFieldValue("CompanyAddress", newValue);
    }
  };

  const handleExpandClick = (id) => {
    if (isAutocompleteVisible) {
      switch (id) {
        case 1:
          setExpanded((prevExpanded) => !prevExpanded);
          setExpanded2(false); // Close component 2
          break;
        case 2:
          setExpanded2((prevExpanded) => !prevExpanded);
          setExpanded(false); // Close component 1

          break;
        default:
          break;
      }
    }
  };

  //*Bug* Render Issue caused by the Address TextField loading a bit slower than rest of the form
  useEffect(() => {
    let active = true;
    if (!isLoaded || loadError || !expanded) return;

    setIsAutocompleteVisible(true);

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
  }, [search, isLoaded, loadError, expanded]);

  useEffect(() => {
    let active = true;
    if (!isLoaded || loadError || !expanded2) return; // check if Autocomplete is visible

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
  }, [search, isLoaded, loadError, expanded2]);

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

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Container>
      <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={libraries}>
        <Typography
          variant="h2"
          mb={0}
          pt={2}
          align="center"
          gutterBottom
          sx={{
            fontSize: isSmallScreen
              ? "2.5rem"
              : isMediumScreen
              ? "3rem"
              : isLargeScreen
              ? "4rem"
              : "2.5rem",
          }}
        >
          Registration
        </Typography>
        <Grid container justifyContent="center" spacing={3} pt={2}>
          <Grid item xs={12} sm={12} md={12} alignItems={"center"}>
            <Card>
              <CardActions disableSpacing>
                <Grid container justifyContent="center" alignItems={"center"}>
                  <Grid item xs={10} sm={11}>
                    {expanded ? (
                      <Typography
                        sx={{ fontStyle: "italic", mb: 0}}
                        variant="h4"
                        align="center"
                        gutterBottom
                        style={{
                          fontSize: isSmallScreen
                            ? "1.5rem"
                            : isMediumScreen
                            ? "2rem"
                            : isLargeScreen
                            ? "3rem"
                            : "2rem",
                        }}
                      >
                        Organization Enrollment Form
                      </Typography>
                    ) : (
                      <Typography
                        variant="h4"
                        mb={0}
                        align="center"
                        gutterBottom
                        sx={{
                          fontSize: isSmallScreen
                            ? "1.5rem"
                            : isMediumScreen
                            ? "2rem"
                            : isLargeScreen
                            ? "3rem"
                            : "2rem",
                        }}
                      >
                        Organization Enrollment Form
                      </Typography>
                    )}
                  </Grid>

                  <Grid item xs={2} sm={1}>
                    <ExpandMore
                      expand={expanded}
                      onClick={() => handleExpandClick(1)}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </Grid>
                </Grid>
              </CardActions>

              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Container>
                  <Grid container justifyContent="center">
                    <Grid item xs={12} sm={12} md={12}></Grid>

                    <Grid item xs={12} sm={12} md={12}>
                      <Form onSubmit={formik.handleSubmit}>
                        <Grid item xs={12} sm={12} md={12}>
                          <Typography variant="h5" sx={{ mb: 2, ml: 2 }}>
                            Contact Information
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          <Grid container spacing={3}>
                            {Object.keys(formData).map((field, index) => (
                              <Grid item xs={12} sm={6} lg={3} key={index}>
                                {field === "CompanyPhone" ? (
                                  <TextFieldWrapper
                                    fullWidth
                                    type="tel"
                                    error={
                                      formik.touched.CompanyPhone &&
                                      Boolean(formik.errors.CompanyPhone)
                                    }
                                    onBlur={formik.handleBlur}
                                    helperText={
                                      <span variant="body2">
                                        {formik.touched.CompanyPhone &&
                                          formik.errors.CompanyPhone}
                                      </span>
                                    }
                                    label={"Phone Number"}
                                    variant="outlined"
                                    name="CompanyPhone"
                                    value={formik.values.CompanyPhone}
                                    onChange={(e) =>
                                      formatPhoneNumber("CompanyPhone", e)
                                    }
                                    placeholder={"123-457-7890"}
                                  />
                                ) : field === "CompanyName" ? (
                                  <TextFieldWrapper
                                    fullWidth
                                    type="name"
                                    error={
                                      formik.touched.CompanyName &&
                                      Boolean(formik.errors.CompanyName)
                                    }
                                    helperText={
                                      <span variant="body2">
                                        {formik.touched.CompanyName &&
                                          formik.errors.CompanyName}
                                      </span>
                                    }
                                    label={"Company Name"}
                                    variant="outlined"
                                    name="CompanyName"
                                    value={formik.values.CompanyName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder={`Qias.Me LLC`}
                                  />
                                ) : field === "Companyemail" ? (
                                  <TextFieldWrapper
                                    fullWidth
                                    error={
                                      formik.touched.Companyemail &&
                                      Boolean(formik.errors.Companyemail)
                                    }
                                    helperText={
                                      <span variant="body2">
                                        {formik.touched.Companyemail &&
                                          formik.errors.Companyemail}
                                      </span>
                                    }
                                    onBlur={formik.handleBlur}
                                    label={"Email Address"}
                                    variant="outlined"
                                    name={"Companyemail"}
                                    value={formik.values.Companyemail}
                                    onChange={formik.handleChange}
                                    placeholder={"Example@Email.com"}
                                  />
                                ) : expanded && field === "CompanyAddress" ? (
                                  <Autocomplete
                                    freeSolo
                                    id="combo-box-demo"
                                    options={options}
                                    value={
                                      selectedPlace ||
                                      formik.values.CompanyAddress
                                    }
                                    onChange={handleAutocompleteChange}
                                    onInputChange={(event, newInputValue) => {
                                      setSearch(newInputValue);
                                      formik.setFieldValue(
                                        "CompanyAddress",
                                        newInputValue
                                      );
                                    }}
                                    renderInput={(params) => (
                                      <TextFieldWrapper
                                        onChange={formik.handleChange}
                                        placeholder={
                                          "123 Main St, New York, New York, 12345"
                                        }
                                        {...params}
                                        name="CompanyAddress"
                                        label={"Company Address"}
                                        error={
                                          formik.touched.CompanyAddress &&
                                          Boolean(formik.errors.CompanyAddress)
                                        }
                                        helperText={
                                          formik.touched.CompanyAddress &&
                                          formik.errors.CompanyAddress
                                        }
                                        onBlur={formik.handleBlur}
                                      />
                                    )}
                                  />
                                ) : null}
                              </Grid>
                            ))}
                          </Grid>
                          <Grid item xs={12} sm={12} md={12}>
                            <TextFieldWrapper
                              fullWidth
                              multiline={true}
                              error={
                                formik.touched.CompanyDescription &&
                                Boolean(formik.errors.CompanyDescription)
                              }
                              helperText={
                                <span variant="body2">
                                  {formik.touched.CompanyDescription &&
                                    formik.errors.CompanyDescription}
                                </span>
                              }
                              onBlur={formik.handleBlur}
                              label={"Company Description"}
                              variant="outlined"
                              name={"CompanyDescription"}
                              value={formik.values.CompanyDescription}
                              onChange={formik.handleChange}
                              placeholder={"Brief description of your company"}
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={12}>
                            <SubmitButton type="submit">Submit</SubmitButton>
                          </Grid>
                        </Grid>
                      </Form>

                      <Dialog open={openDialog} onClose={handleClose}>
                        <DialogContent>
                          {loading ? (
                            <Box>
                              <CircularProgress />
                            </Box>
                          ) : (
                            <>
                              <Box>
                                <Typography
                                  variant="h5"
                                  align="center"
                                  gutterBottom
                                >
                                  Application Submitted
                                </Typography>
                                <Typography
                                  variant="subtitle"
                                  align="center"
                                  gutterBottom
                                >
                                  We will be reaching out shortly reguarding
                                  next steps.{" "}
                                </Typography>
                              </Box>
                              {/* Additional modal content */}
                            </>
                          )}
                        </DialogContent>
                      </Dialog>
                    </Grid>
                  </Grid>
                </Container>
              </Collapse>
            </Card>
          </Grid>
          {/* <Grid item xs={12} sm={12} md={12}>
            <Card>
              <CardActions disableSpacing>
                <Grid container justifyContent="center" alignItems={"center"}>
                  <Grid item xs={10} sm={11}>
                    {expanded2 ? (
                      <Typography
                        sx={{ fontStyle: "italic", mb: 0 }}
                        variant="h4"
                        align="center"
                        gutterBottom
                        style={{
                          fontSize: isSmallScreen
                            ? "1.5rem"
                            : isMediumScreen
                            ? "2rem"
                            : isLargeScreen
                            ? "3rem"
                            : "2rem",
                        }}
                      >
                        Parent Enrollment Form
                      </Typography>
                    ) : (
                      <Typography
                        variant="h4"
                        mb={0}
                        align="center"
                        gutterBottom
                        sx={{
                          fontSize: isSmallScreen
                            ? "1.5rem"
                            : isMediumScreen
                            ? "2rem"
                            : isLargeScreen
                            ? "3rem"
                            : "2rem",
                        }}
                      >
                        Parent Enrollment Form
                      </Typography>
                    )}
                  </Grid>

                  <Grid item xs={2} sm={1}>
                    <ExpandMore
                      expand={expanded2}
                      onClick={() => handleExpandClick(2)}
                      aria-expanded={expanded2}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </Grid>
                </Grid>
              </CardActions>

              <Collapse in={expanded2} timeout="auto" unmountOnExit>
                <Container>
                  <Grid container justifyContent="center">
                    <Grid item xs={12} sm={12} md={12}></Grid>

                    <Form onSubmit={formik.handleSubmit}>
                      <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="h5" sx={{ mb: 2, ml: 2 }}>
                          Contact Information
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <Grid container spacing={3}>
                          {Object.keys(formData).map((field, index) => (
                            <Grid item xs={12} sm={6} lg={3} key={index}>
                              {field === "CompanyPhone" ? (
                                <TextFieldWrapper
                                  fullWidth
                                  type="tel"
                                  error={
                                    formik.touched.CompanyPhone &&
                                    Boolean(formik.errors.CompanyPhone)
                                  }
                                  onBlur={formik.handleBlur}
                                  helperText={
                                    <span variant="body2">
                                      {formik.touched.CompanyPhone &&
                                        formik.errors.CompanyPhone}
                                    </span>
                                  }
                                  label={"Phone Number"}
                                  variant="outlined"
                                  name="CompanyPhone"
                                  value={formik.values.CompanyPhone}
                                  onChange={(e) =>
                                    formatPhoneNumber("CompanyPhone", e)
                                  }
                                  placeholder={"123-457-7890"}
                                />
                              ) : field === "CompanyName" ? (
                                <TextFieldWrapper
                                  fullWidth
                                  type="name"
                                  error={
                                    formik.touched.CompanyName &&
                                    Boolean(formik.errors.CompanyName)
                                  }
                                  helperText={
                                    <span variant="body2">
                                      {formik.touched.CompanyName &&
                                        formik.errors.CompanyName}
                                    </span>
                                  }
                                  label={"Company Name"}
                                  variant="outlined"
                                  name="CompanyName"
                                  value={formik.values.CompanyName}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  placeholder={`Qias.Me LLC`}
                                />
                              ) : field === "Companyemail" ? (
                                <TextFieldWrapper
                                  fullWidth
                                  error={
                                    formik.touched.Companyemail &&
                                    Boolean(formik.errors.Companyemail)
                                  }
                                  helperText={
                                    <span variant="body2">
                                      {formik.touched.Companyemail &&
                                        formik.errors.Companyemail}
                                    </span>
                                  }
                                  onBlur={formik.handleBlur}
                                  label={"Email Address"}
                                  variant="outlined"
                                  name={"Companyemail"}
                                  value={formik.values.Companyemail}
                                  onChange={formik.handleChange}
                                  placeholder={"Example@Email.com"}
                                />
                              ) : expanded2 && field === "CompanyAddress" ? (
                                <Autocomplete
                                  freeSolo
                                  id="combo-box-demo"
                                  options={options}
                                  value={
                                    selectedPlace ||
                                    formik.values.CompanyAddress
                                  }
                                  onChange={handleAutocompleteChange}
                                  onInputChange={(event, newInputValue) => {
                                    setSearch(newInputValue);
                                    formik.setFieldValue(
                                      "CompanyAddress",
                                      newInputValue
                                    );
                                  }}
                                  renderInput={(params) => (
                                    <TextFieldWrapper
                                      onChange={formik.handleChange}
                                      placeholder={
                                        "123 Main St, New York, New York, 12345"
                                      }
                                      {...params}
                                      name="CompanyAddress"
                                      label={"Company Address"}
                                      error={
                                        formik.touched.CompanyAddress &&
                                        Boolean(formik.errors.CompanyAddress)
                                      }
                                      helperText={
                                        formik.touched.CompanyAddress &&
                                        formik.errors.CompanyAddress
                                      }
                                      onBlur={formik.handleBlur}
                                    />
                                  )}
                                />
                              ) : null}
                            </Grid>
                          ))}
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          <TextFieldWrapper
                            fullWidth
                            multiline={true}
                            error={
                              formik.touched.CompanyDescription &&
                              Boolean(formik.errors.CompanyDescription)
                            }
                            helperText={
                              <span variant="body2">
                                {formik.touched.CompanyDescription &&
                                  formik.errors.CompanyDescription}
                              </span>
                            }
                            onBlur={formik.handleBlur}
                            label={"Company Description"}
                            variant="outlined"
                            name={"CompanyDescription"}
                            value={formik.values.CompanyDescription}
                            onChange={formik.handleChange}
                            placeholder={"Brief description of your company"}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          <SubmitButton type="submit">Submit</SubmitButton>
                        </Grid>
                      </Grid>
                    </Form>
                    <Dialog open={openDialog} onClose={handleClose}>
                      <DialogContent>
                        {loading ? (
                          <Box>
                            <CircularProgress />
                          </Box>
                        ) : (
                          <>
                            <Box>
                              <Typography
                                variant="h5"
                                align="center"
                                gutterBottom
                              >
                                Application Submitted
                              </Typography>
                              <Typography
                                variant="subtitle"
                                align="center"
                                gutterBottom
                              >
                                We will be reaching out shortly reguarding next
                                steps.{" "}
                              </Typography>
                            </Box>
                            Test
                          </>
                        )}
                      </DialogContent>
                    </Dialog>
                  </Grid>
                </Container>
              </Collapse>
            </Card>
          </Grid> */}
        </Grid>
      </LoadScript>
    </Container>
  );
});

export default CompanyApplication;
