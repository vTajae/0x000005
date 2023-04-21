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
                                  selectedPlace || formik.values.CompanyAddress
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
    </Grid>
  </LoadScript>
</Container>;
