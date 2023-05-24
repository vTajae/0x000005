import React, { useState } from "react";
import {
  Grid,
  Typography,
  FormControl,
  FormControlLabel,
  Checkbox,
  Button,
  Box
} from "@mui/material";
import CompanyForm from "./Application/Company";
import ParentForm from "./Application/Parent"; 
import { StyledBox } from "./styles";

const RegistrationForm = () => {
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  return (
    <StyledBox>
      <Grid container justifyContent="center" spacing={3} pt={2}>
        <Grid item xs={12}>
          <Typography variant="h2" align="center" gutterBottom>
            Registration
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}  alignContent="center" >
          <Box display="flex" flexDirection="row" justifyContent={"space-evenly"} alignItems="baseline" p={2}>
            <Typography variant="body1">
              {selectedRole ? `You are a ${selectedRole}` : "Choose Your Role:"}
            </Typography>
            <Button
              variant={selectedRole === 'company' ? 'contained' : 'outlined'}
              onClick={() => handleRoleChange('company')}
              sx={{ mt: 2 }}
            >
              Company
            </Button>
            <Button
              variant={selectedRole === 'parent' ? 'contained' : 'outlined'}
              onClick={() => handleRoleChange('parent')}
              sx={{ mt: 2 }}
            >
              Parent
            </Button>
          </Box>
        </Grid>
        {selectedRole === 'company' && (
          <Grid item xs={12}>
            <CompanyForm />
          </Grid>
        )}
        {selectedRole === 'parent' && (
          <Grid item xs={12}>
            <ParentForm />
          </Grid>
        )}
      </Grid>
    </StyledBox>
  );
};

export default RegistrationForm;
