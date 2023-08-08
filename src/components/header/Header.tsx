import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { red } from '@mui/material/colors';
import { NavBar, NavContainer } from './Header.style';

const Header = () => {
  return (
    <NavContainer>
      <NavBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </NavBar>
    </NavContainer>
  );
};

export default Header;
