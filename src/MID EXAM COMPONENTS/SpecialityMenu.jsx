import React from 'react';
import './specialmenu.css';

function SpecialMenu({items}) {
    return (
        <div class>
        <h2>Our Speciality Menu</h2>
        <div className="special-menu">
            
            <div className="item-card">
                <img src={items.image} alt={items.name} className="item-image" />
                <div className="item-details">
                    <h3 className="item-name">{items.name}</h3>
                    <p className="item-description">{items.description}</p>
                    <p className="item-price">{items.price}</p>
                </div>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
        </div>
    );
}

export default SpecialMenu;

