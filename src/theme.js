// src/theme.js
import { createTheme } from '@mui/material/styles';

// Definir colores personalizados
const colores = {
  primary: '#5c6bc0',
  Secondary: '#ff7043',
  error: '#e57373',
  warning: '#ffb74d',
  info: '#64b5f6',
  success: '#81c784',
  background: '#fff',
  paper: '#ffffff',
};

// Crear tema
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },

  palette: {
    primary: {
      main: colores.primary,
      contrastText: '#fff',
    },
    secondary: {
      main: colores.Secondary,
      contrastText: '#000',
    },
    error: {
      main: colores.error,
    },
    warning: {
      main: colores.warning,
    },
    info: {
      main: colores.info,
    },
    success: {
      main: colores.success,
    },
    background: {
      default: colores.background,
      paper: colores.paper,
    },
  },
  typography: {
    fontFamily: `Roboto, Helvetica, Arial, sans-serif`,

    allVariants: {
      color: 'black',
    },
    h1: {
      fontWeight: 400,
      fontSize: '6rem',
    },
    h2: {
      fontWeight: 400,
      fontSize: '3.75rem',
    },
    h3: {
      fontWeight: 400,
      fontSize: '3rem',
    },
    h4: {
      fontWeight: 400,
      fontSize: '2.125rem',
    },
    h5: {
      fontWeight: 400,
      fontSize: '1.5rem',
    },
    h6: {
      fontWeight: 400,
      fontSize: '1.25rem',
    },
  },
  box: {
    color: 'black',
  },
  shape: {
    borderRadius: 8,
  },
});
