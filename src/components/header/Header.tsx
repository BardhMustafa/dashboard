import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { AppBar, Drawer } from './Header.style';
import { StyledComponentProps, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FeedIcon from '@mui/icons-material/Feed';
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { userStore } from '@/store/userStore';
import HeaderItem, { HeaderItemProps } from './HeaderItem';
import LoginIcon from '@mui/icons-material/Login';
import HeaderButton from './HeaderButton';

const DrawerHeader = styled('div')<StyledComponentProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function Header() {
  const theme = useTheme();
  const { isAuthenticated } = userStore();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
            <Typography component="div" marginLeft={3} fontSize={22}>
              Dashboard
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography component="div" marginLeft={3} fontSize={22}>
            Dashboard
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List>
          {!isAuthenticated ? (
            <HeaderItem
              href="/login"
              isHeaderOpen={open}
              icon={<LoginIcon />}
              text="Login"
            />
          ) : (
            <>
              {PUBLIC_MENU.map((item: HeaderItemProps) => (
                <HeaderItem
                  key={item.text}
                  href={item.href}
                  isHeaderOpen={open}
                  icon={item.icon}
                  text={item.text}
                />
              ))}
              <HeaderButton
                isHeaderOpen={open}
                icon={<LogoutIcon />}
                text="Logout"
              />
            </>
          )}
        </List>
      </Drawer>
    </Box>
  );
}
const PUBLIC_MENU: HeaderItemProps[] = [
  {
    href: '/dashboard',
    icon: <AccountCircleIcon />,
    text: 'Admin',
  },
  {
    href: '/articles',
    icon: <FeedIcon />,
    text: 'Posts',
  },
  {
    href: '/add-post',
    icon: <AddCircleIcon />,
    text: 'Add Post',
  },
];
