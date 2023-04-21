import React, { useState } from "react";
import ApplicationForm from "./ApplicationForm";
import IconButton from "@mui/material/IconButton";
import styled from "@mui/material/styles/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Grid,
  Typography,
  Container,
  Collapse,
  Card,
  CardActions,
} from "@mui/material";

// import {
//   Grid,
//   Typography,
//   Box,
//   Container,
//   Collapse,
//   Card,
//   CardActions,
//   Dialog,
//   DialogContent,
//   CircularProgress,
//   Button,
// } from "@mui/material";

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

const FormToggle = ({
  formTitle,
  formData,
  validationRules,
  fieldProperties,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container>
      <Container>
        <Typography variant="h2" mb={0} pt={2} align="center" gutterBottom>
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
                      >
                        Organization Enrollment Form
                      </Typography>
                    ) : (
                      <Typography
                        variant="h4"
                        mb={0}
                        align="center"
                        gutterBottom
                      >
                        Organization Enrollment Form
                      </Typography>
                    )}
                  </Grid>{" "}
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
                      <ApplicationForm
                        formData={formData}
                        fieldProperties={fieldProperties}
                        validationRules={validationRules}
                      />
                    </Grid>
                  </Grid>
                </Container>
              </Collapse>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default FormToggle;