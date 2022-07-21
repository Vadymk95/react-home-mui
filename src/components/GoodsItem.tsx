import React, { FC } from 'react';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { IOrderedBook } from '../models/OrderedBook';
import { IBook } from '../models/Book';

interface IGoodsItemProps extends Omit<IBook, 'category'> {
  setOrder: (goodsItem: IOrderedBook) => void;
}

export const GoodsItem: FC<IGoodsItemProps> = ({
  id,
  name,
  price,
  setOrder,
  poster,
}) => {
  const clickHandler = () => setOrder({ id, name, price });

  return (
    <Grid item xs={12} md={4} sm={6}>
      <Card sx={{ height: '100%' }}>
        <CardMedia
          component="img"
          image={poster}
          alt={name}
          title={name}
          sx={{ height: 140, objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="h3">
            {name}
          </Typography>
          <Typography variant="body1">Price: {price} &#36;</Typography>
        </CardContent>
        <CardActions>
          <Button variant="text" onClick={clickHandler}>
            Buy
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
