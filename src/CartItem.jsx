import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../redux/cartActions'; // adjust path as needed
import { useNavigate } from 'react-router-dom';

const CartItems = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calculate total cost of all items in cart
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach(item => {
      const cost = parseFloat(item.cost);
      total += item.quantity * cost;
    });
    return total.toFixed(2);
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleContinueShopping = () => {
    navigate('/shop'); // or whatever your shopping page route is
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px' }}>
            <h3>{item.name}</h3>
            <p>Price: ${parseFloat(item.cost).toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Subtotal: ${(item.quantity * parseFloat(item.cost)).toFixed(2)}</p>
            <button onClick={() => handleIncrement(item.id)}>+</button>
            <button onClick={() => handleDecrement(item.id)} disabled={item.quantity <= 1}>-</button>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))
      )}
      <h3>Total: ${calculateTotalAmount()}</h3>
      <button onClick={handleContinueShopping}>Continue Shopping</button>
    </div>
  );
};

export default CartItems;