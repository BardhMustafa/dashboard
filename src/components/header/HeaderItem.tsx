import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  StyledComponentProps,
} from '@mui/material';
import ListItem from '@mui/material/ListItem';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

type HeaderItemProps = {
  isHeaderOpen: boolean;
  icon: JSX.Element;
  text: string;
  href: string;
};

const CustomNavLink = styled(NavLink)<StyledComponentProps>`
  text-decoration: none;
  color: inherit;
`;

const HeaderItem = ({ isHeaderOpen, icon, text, href }: HeaderItemProps) => {
  return (
    <CustomNavLink to={href}>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: isHeaderOpen ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: isHeaderOpen ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText primary={text} sx={{ opacity: isHeaderOpen ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
    </CustomNavLink>
  );
};

export default HeaderItem;
