import { Box, Modal } from '@mui/material';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: JSX.Element;
};
const ModalComponent = ({ open, onClose, children }: ModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        bgcolor="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Box>
    </Modal>
  );
};

export default ModalComponent;
