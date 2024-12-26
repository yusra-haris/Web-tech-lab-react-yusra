import React from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        <li><Link to="/products/headphones">Wireless Headphones</Link></li>
        <li><Link to="/products/phone">Smartphone</Link></li>
        
      </ul>
    </div>
  );
}

export default ProductList;
