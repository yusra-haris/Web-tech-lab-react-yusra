import React from 'react';
import './landingpage.css';

function LandingPage() {
    return (
        <div className="mainpage">
            <div className="content">
                <h1> TASTE THE <span className="highlight"> KABABJEES </span> MAGIC</h1>
                <p> Crispy, Delicious Chicken that keeps you coming back</p>
                <button>Order Now</button>
            </div>
            <div className="image-container">
                <img 
                    src="https://images.deliveryhero.io/image/fd-pk/LH/qcve-listing.jpg" 
                    alt="Delicious Food" 
                    className="roundimage" 
                />
            </div>
        </div>
    );
}

export default LandingPage;
