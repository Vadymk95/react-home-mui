import React, { FC } from 'react';

import { Alert, Snackbar } from '@mui/material';

type SnackProps = {
  isOpen: boolean;
  handleClose: () => void;
};

export const Snack: FC<SnackProps> = ({ isOpen, handleClose }) => {
  return (
    <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={3000}>
      <Alert severity="success">Product added to cart!</Alert>
    </Snackbar>
  );
};
