import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductDetails from './New Components/Products';
import Home from './New Components/Home';
import Account from './New Components/User';
import ProductList from './New Components/ProductList';
import AddToCart from './New Components/Cart';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    if (quantity > 0) {
      setCart((prevCart) => {
        const existingProduct = prevCart.find((item) => item.name === product.name);
        if (existingProduct) {
          return prevCart.map((item) =>
            item.name === product.name
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          return [...prevCart, { ...product, quantity }];
        }
      });
    }
  };

  const updateQuantity = (item, newQuantity) => {
    if (newQuantity > 0) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: newQuantity }
            : cartItem
        )
      );
    }
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.name !== item.name));
  };
  return (
    <div>
      <Router>
        <nav className='navbar'>
          <div className="logo">
            <img src="https://marketplace.canva.com/EAFzjXx_i5w/1/0/1600w/canva-blue-illustrative-e-commerce-online-shop-logo-fZejT2DpGCw.jpg" alt="Logo" />
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/userID/userID">User Account</Link></li>
            <li>
              <Link to="/cart">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
                  alt="Cart"
                  className="cart-icon"
                />
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:productName" element={<ProductDetails addToCart={addToCart} />} />
          <Route path="/userID/:userID" element={<Account />} />
          <Route path="/cart" element={<AddToCart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
