import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { updateQuantity, removeFromCart } from "../features/cart/cartSlice";
import "./Cart.css";

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

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
            <p>Price: ${item.price.toFixed(2)}</p>
            <div className="quantity-controls">
              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({ id: item.id, quantity: item.quantity - 1 })
                  )
                }
                disabled={item.quantity === 1}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({ id: item.id, quantity: item.quantity + 1 })
                  )
                }
              >
                +
              </button>
            </div>
            <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </div>
        ))
      )}
      <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      <button className="checkout-button">Checkout</button>
    </div>
  );
};

export default Cart;
