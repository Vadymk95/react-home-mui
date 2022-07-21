import React, { FC } from 'react';

import { IconButton, ListItem, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';

import { IOrderedBook } from '../models/OrderedBook';

interface IBasketItemProps extends IOrderedBook {
  removeFromOrder: (id: string) => void;
}

export const BasketItem: FC<IBasketItemProps> = ({
  price,
  quantity,
  id,
  removeFromOrder,
  name,
}) => {
  const clickHandler = () => removeFromOrder(id);

  return (
    <ListItem>
      <Typography variant="body1">
        {name} {price}&#36; x{quantity}
      </Typography>
      <IconButton onClick={clickHandler}>
        <Close />
      </IconButton>
    </ListItem>
  );
};
