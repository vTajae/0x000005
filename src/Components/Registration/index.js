import React from "react";
import CompanyForm from "../Application/Company";
import ParentForm from "../Application/Parent";
import { Grid, Typography, Container } from "@mui/material";
// import ParentApplication from "../ParentApplication";
const index = () => {
  return (
    <Container>
      <Typography variant="h2" mb={0} pt={2} align="center" gutterBottom>
        Registration
      </Typography>

      <Grid container justifyContent="center" spacing={3} pt={2}>
        <Grid item xs={12} sm={12} md={12} alignItems={"center"}>
          <CompanyForm />
        </Grid>
        <Grid item xs={12} sm={12} md={12} alignItems={"center"}>
          <ParentForm />
        </Grid>
      </Grid>

      {/* <ParentApplication /> */}
    </Container>
  );
};

export default index;
