import MainContainer from '@/shared/MainContainer';
import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';

const BackDropLoader = ({ open }: { open: boolean }) => {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default BackDropLoader;
