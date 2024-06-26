import React from "react";
import ReactDOM from "react-dom/client";
import logoImage from '/images/food-logo.jpg';

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 *          - Img
 *          - Name of Res, Star Rating, Cusines, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logoImage} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Name</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestaurantCard = (props) => {
    return (
        <div className="res-card">
            <img alt="res-logo"
                className="res-logo"
                src={props.resImage} />
            <h4>{props.resName}</h4>
            <h5>{props.cuisine}</h5>
            <h6>{props.rating}</h6>
            <h6>{props.deliveryTime}</h6>
        </div>
    );
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard
                    resName="Pista House"
                    resImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/wsp5vreexpl64nq41m1h"
                    cuisine="Biryani, South Indian, Asian"
                    rating="4.5"
                    deliveryTime="30 minutes" />
                <RestaurantCard
                    resName="KFC"
                    resImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/37dc9e37-386f-453b-a219-ffa2c154750b_342463.JPG"
                    cuisine="Burger, Chicken Wings"
                    rating="4.1"
                    deliveryTime="50 minutes" />
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
