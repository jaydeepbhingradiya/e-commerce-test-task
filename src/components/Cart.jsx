import React from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const totalAmount = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <h4>{item.title}</h4>
            <p>Price: ${item.price}</p>
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <p>Total: ${item.quantity * item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      <button className="checkout-button">Checkout</button>
    </div>
  );
};

export default Cart;
