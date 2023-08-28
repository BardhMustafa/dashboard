import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ListItem from '@mui/material/ListItem';

type HeaderButtonProps = {
  isHeaderOpen: boolean;
  icon: JSX.Element;
  text: string;
};

const HeaderButton = ({ isHeaderOpen, icon, text }: HeaderButtonProps) => {
  return (
    <ListItem disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: isHeaderOpen ? 'initial' : 'center',
          px: 2.5,
        }}
        onClick={() => {}}
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
  );
};

export default HeaderButton;
