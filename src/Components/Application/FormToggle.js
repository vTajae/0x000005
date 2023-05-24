import React, { useState } from "react";
import ApplicationForm from "./ApplicationForm";
import IconButton from "@mui/material/IconButton";
import styled from "@mui/material/styles/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid, Typography, Container, Card, CardActions, Collapse, Box } from "@mui/material";

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
  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
        <Card elevation={2}            
         sx={{backgroundColor: "rgba(255, 255, 255, 0.4)"}}
        >
          <CardActions disableSpacing>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item xs={10} sm={11}>
                <Box sx={{ display: "flex", justifyContent: "center" }} p={.5} >
                <Typography variant="h4" gutterBottom align="center">
                  {formTitle}
                </Typography>
                </Box>
              </Grid>
              <Grid item xs={2} sm={1}>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
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
  );
};

export default FormToggle;
