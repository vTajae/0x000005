import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  spacing: 8, // set the default spacing value
  palette: {
    primary: {
      main: '#3f51b5',
      contrastText: '#fff',
      dark: '#303f9f'
    }
  }
});

