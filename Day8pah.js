import React, { useState } from 'react';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const cartReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };

    default:
      return state;
  }
};

const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});

const store = createStore(cartReducer);

const CartPage = () => {
  const cartItems = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div>
      <h2>Cart:</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProductList = () => {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: 'Laptop', price: 5500 },
    { id: 2, name: 'Mobile', price: 3000 },
    { id: 3, name: 'Bluetooth', price: 300 },
    { id: 4, name: 'Tablet', price: 4000 },
  ];

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div>
      <h2>Products:</h2>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}<br/>
            <button style={{color:'white',backgroundColor:'black'}}onClick={() => handleAddToCart(item)}>Buy Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Gadgets</h1>
        <ProductList />
        <CartPage />
      </div>
    </Provider>
  );
};

export default App;