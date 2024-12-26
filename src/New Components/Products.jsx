import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductStyling.css';

function ProductDetails({ addToCart }) {
  const { productName } = useParams();
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const products = {
    headphones: {
      name: "Wireless Headphones",
      description: "Experience immersive sound with our sleek, comfortable, and noise-cancelling wireless headphones.",
      price: "Rs. 2500",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQg4TCNK1vAr3Sx9_kRe-3UpM__X8ISuMiWA&s",
    },
    phone: {
      name: "Smartphone",
      description: "Latest model with cutting-edge features and stunning display.",
      price: "Rs. 40000",
      image: "https://www.dataselect.com/wp-content/uploads/2023/08/Smartphone-Specifications-Explained-2.webp",
    },
  };

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productName && products[productName]) {
      setProduct(products[productName]);
    }
  }, [productName]);

  const increment = () => setCount(count + 1);
  const decrement = () => count > 0 && setCount(count - 1);

  const handleAddToCart = () => {
    addToCart(product, count);
    alert(`${count} ${product.name}(s) added to the cart!`);
    navigate('/cart');
  };

  return (
    <div className="product-container">
      {product ? (
        <div>
            <h1 className="detailtitle">{product.name}</h1>
            <div className="productcard">
            <img src={product.image} alt={product.name} className="prodimage" />
            <p className="detailsdata">{product.description}</p>
            </div>
            
            <p className="product-price">{product.price}</p>
            <p></p>
            <div className="quantity-container">
              <button className="quantity-button" onClick={decrement}>-</button>
              <span>Quantity: {count}</span>
              <button className="quantity-button" onClick={increment}>+</button>
            </div>
            <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
          </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}

export default ProductDetails;
