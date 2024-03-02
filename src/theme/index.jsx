import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#43f389',
    },
    secondary: {
      main: '#40cb50',
      light: '#74ef8b',
    },
    error: {
      main: '#33ef8d',
      dark: '#ff0c11',
      light: '#ff0003',
    },
    text: {
      primary: '#f9f9f9',
      secondary: '#ffffff',
      // Agregué 'primary' para establecer el color principal del texto.
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: 'Caveat',
  },
  components: {
    // Corregí la estructura para incluir 'components' dentro del objeto del tema.
    MuiInput: {
      styleOverrides: {
        root: {
          color: 'white', // Quité las comillas en 'color'
        },
      },
    },
  },
});

export default theme;
