import React, { ChangeEvent, useEffect, useState } from 'react';

import { Container } from '@mui/material';

import { Basket, GoodsList, Header, Search, Snack } from './components';
import { goods } from './data/goods';

import { IOrderedBook } from './models/OrderedBook';

const App = () => {
  const [order, setOrder] = useState<IOrderedBook[]>([]);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState(goods);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSnackOpen, setSnackOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('books')) {
      localStorage.setItem('books', JSON.stringify(order))
    } else {
      setOrder(JSON.parse(localStorage.getItem('books') || '[]'))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(order))
  }, [order])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setProducts(goods);
      setSearch('');
      return;
    }

    setSearch(e.target.value);
    setProducts(
      products.filter((good) =>
        good.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const addToOrder = (goodsItem: IOrderedBook) => {
    let quantity = 1;

    const indexInOrder = order.findIndex(
      (item: IOrderedBook) => item.id === goodsItem.id
    );

    if (indexInOrder > -1) {
      quantity = order[indexInOrder].quantity! + 1;
      setOrder(
        order.map((item: IOrderedBook) => {
          if (item.id !== goodsItem.id) return item;
          return {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity,
          };
        })
      );
    } else {
      setOrder([
        ...order,
        {
          id: goodsItem.id,
          name: goodsItem.name,
          price: goodsItem.price,
          quantity,
        },
      ]);
    }
    setSnackOpen(true);
  };

  const removeFromOrder = (goodsItem: string) => {
    setOrder(order.filter((item) => item.id !== goodsItem));
  };

  const closeCartHandler = () => setIsCartOpen(false);

  return (
    <>
      <Header handleCart={() => setIsCartOpen(true)} orderLen={order.length} />
      <Container sx={{ my: '1rem' }}>
        <Search value={search} onChange={handleChange} />
        <GoodsList goods={products} setOrder={addToOrder} />
      </Container>
      <Basket
        order={order}
        cartOpen={isCartOpen}
        closeCart={closeCartHandler}
        removeFromOrder={removeFromOrder}
      />
      <Snack isOpen={isSnackOpen} handleClose={() => setSnackOpen(false)} />
    </>
  );
};

export default App;
