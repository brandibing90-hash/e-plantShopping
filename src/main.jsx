import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/CartSlice';

const PlantItem = ({ plant }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <h3>{plant.name}</h3>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default PlantItem;