import React from 'react';
import './Cart.css';

function AddToCart({ cart = [], updateQuantity, removeFromCart }) {
  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is currently empty. Start shopping now!</p>
        <p></p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <div className="cart-item-quantity">
                  <button className="quantity-btn" onClick={() => updateQuantity(item, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="quantity-btn" onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
                </div>
                <p className="cart-item-price">Price: Rs. {item.quantity * parseFloat(item.price.replace('Rs. ', ''))}</p>
                <button className="delete-btn" onClick={() => removeFromCart(item)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AddToCart;
