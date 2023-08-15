import { createTheme } from '@mui/material';
import { ThemeProvider } from 'styled-components';

const Theme = ({ children }: { children: JSX.Element }) => {
  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#003f5c',
        light: '#58508d',
        dark: '#003f5c',
        contrastText: '#ffffff',
      },
    },
    typography: {
      fontFamily: "'Poppins', sans-serif",
    },
  });
  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
};

export default Theme;
