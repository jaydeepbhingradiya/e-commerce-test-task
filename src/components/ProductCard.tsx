import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { CartItem } from "../features/cart/cartTypes";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // Transform Product into CartItem
    const cartItem: CartItem = {
      ...product,
      quantity: 1, // Add the missing quantity field
    };
    dispatch(addToCart(cartItem));
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} loading="lazy"/>
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
