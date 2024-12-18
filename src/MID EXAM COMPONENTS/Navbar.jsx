import React from 'react';
import './Navbar.css'; 

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuCqF-y46CtWSswTYuDXGKCFVED-CCpbhlg&s" 
                    alt="Logo" 
                    className="logo-image" 
                />
                <h3>Kababjees Fried Chicken</h3>
            </div>
            <ul className="navbar-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#order">Order Now</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
