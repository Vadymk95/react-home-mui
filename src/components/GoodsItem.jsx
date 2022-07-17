import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';

export const GoodsItem = (props) => {
  const { name, price, setOrder, poster } = props;

  return (
    <Grid item xs={12} md={4} sm={6}>
      <Card sx={{height: '100%'}}>
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
          <Typography variant="body1">Цена: {price} руб.</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="text"
            onClick={() =>
              setOrder({
                id: props.id,
                name: props.name,
                price: props.price,
              })
            }
          >
            Купить
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
