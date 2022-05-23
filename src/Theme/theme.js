import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#8b74aa',
      light: '#ab9ac1',
      dark: '#594672'
    },
    secondary: {
      main: '#a3a5c3'
    },
    colorBlack: {
      main: '#070d0e'
    },
    colorWhite: {
      main: '#ffffff'
    },
    neutral: {
      main: '#f1f8f8',
    },
    neutralGray: {
      main: '#BABBC9',
      dark: '#A4A5B7'
    },
    danger: {
      main: '#eb9486'
    },
    warning: {
      main: '#f3de8a'
    },
    success: {
      main: '#a9d3d5'
    }
  },
  typography: {
    fontFamily: 'lato',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontWeightBold: 900,
    useNextVariants: true,
    h1: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      lineHeight: "1.2em"
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: "normal",
      lineHeight: "1.2em"
    },
  }
});