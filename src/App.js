import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <div className="app-container">
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
