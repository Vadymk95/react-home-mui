import React, { FC } from 'react';

import {
  CloseReason,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';

import { BasketItem } from './BasketItem';
import { IOrderedBook } from '../models/OrderedBook';

type BasketProps = {
  cartOpen: boolean;
  closeCart: (event: object, reason: CloseReason) => void;
  order: IOrderedBook[];
  removeFromOrder: (id: string) => void;
};

export const Basket: FC<BasketProps> = ({
  cartOpen,
  closeCart = Function.prototype,
  order,
  removeFromOrder,
}) => {
  return (
    <Drawer anchor="right" open={cartOpen} onClose={() => closeCart()}>
      <List sx={{ width: '400px' }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary="Basket" />
        </ListItem>
        <Divider />
        {!order.length ? (
          <ListItem>Basket is empty!</ListItem>
        ) : (
          <>
            {order.map((item) => (
              <BasketItem
                key={item.name}
                removeFromOrder={removeFromOrder}
                {...item}
              />
            ))}
            <Divider />
            <ListItem>
              <Typography sx={{ fontWeight: 700 }}>
                Total cost:{' '}
                {order.reduce((acc, item) => {
                  return acc + item.price * item.quantity!;
                }, 0)}{' '}
                &#36;.
              </Typography>
            </ListItem>
          </>
        )}
      </List>
    </Drawer>
  );
};
