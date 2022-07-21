import React, { FC } from 'react';

import { Grid } from '@mui/material';
import { GoodsItem } from './GoodsItem';

import { IBook } from '../models/Book';
import { IOrderedBook } from '../models/OrderedBook';

type GoodsListProps = {
  goods: IBook[];
  setOrder: (goodsItem: IOrderedBook) => void;
};

export const GoodsList: FC<GoodsListProps> = ({ goods, setOrder }) => {
  return (
    <Grid container spacing={2}>
      {goods.map((item) => (
        <GoodsItem key={item.id} setOrder={setOrder} {...item} />
      ))}
    </Grid>
  );
};
