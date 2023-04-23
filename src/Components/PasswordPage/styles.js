import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const FormContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  });
  
  export const Form = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  });
  
  export const StyledTextField = styled(TextField)({
    width: '100%',
    marginBottom: '1rem',
  });
  
  export const StyledButton = styled(Button)({
    width: '100%',
    marginBottom: '1rem',
  });
  