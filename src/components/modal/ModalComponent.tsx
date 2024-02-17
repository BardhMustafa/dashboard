import { Modal } from '@mui/material';


type ModalProps = {
  open: boolean;
  onClose: ()=> void;
  children: JSX.Element;
};
const ModalComponent = ({ open, onClose, children }: ModalProps) => {
  return <Modal open={open} onClose={onClose}>
    {children}
  </Modal>;
};

export default ModalComponent;
