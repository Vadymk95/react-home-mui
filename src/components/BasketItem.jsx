import { IconButton, ListItem, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';

export const BasketItem = (props) => {
  const { price, quantity, id, removeFromOrder, name } = props;
  return (
    <ListItem>
      <Typography variant="body1">{name} {price}руб x{quantity}</Typography>
      <IconButton
        onClick={() => removeFromOrder(id)}
      >
        <Close />
      </IconButton>
    </ListItem>
  );
};
