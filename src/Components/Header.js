import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../images/food-logo.jpg';

const Header = () => {
    const [btnLogInText, setBtnLogInText] = useState("Login");
    const updateLoginText = () => {
        btnLogInText == "Login" ? setBtnLogInText("Logout") : setBtnLogInText("Login");
    };

    //if no dependency array => useEffect is called on every render
    //if dependency array is empty =[] useEffect is called on initial render(just once)
    useEffect(() => {
        console.log("Use Effect is called")
    }, []);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logoImage} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={() => updateLoginText()}>{btnLogInText}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;