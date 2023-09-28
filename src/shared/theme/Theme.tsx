import { createTheme } from '@mui/material';
import { rootShouldForwardProp } from '@mui/material/styles/styled';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

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
  return (
    <StyleSheetManager shouldForwardProp={rootShouldForwardProp}>
      <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
    </StyleSheetManager>
  );
};

export default Theme;
