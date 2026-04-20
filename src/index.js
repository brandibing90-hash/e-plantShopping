import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';  // Adjust path if your store.js is in another folder
import App from './App';      // Assuming App.jsx is your main component
import './index.css';         // Import your CSS if you have it

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);