import React from 'react';

import { AppBar, Toolbar, Badge, Typography, IconButton } from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';

export const Header = (props) => {
  const { handleCart, orderLen } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MUI Shop
        </Typography>
        <IconButton onClick={handleCart} color="inherit">
          <Badge color="secondary" badgeContent={orderLen}>
            <ShoppingBasket />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
