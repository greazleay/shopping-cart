import React from "react";
import bag from "../appData/images/shopping-cart.png";
import logo from "../appData/images/h2.png"
import { Link } from "react-router-dom";

const NavBar = (props) => {
    return (
        <nav className="nav-bar">
            <img src={logo} alt="" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/checkout">Checkout</Link></li>
            </ul>
            <div>
                <img src={bag} alt="" />
                <span>{props.cart}</span>
            </div>
        </nav>
    )
}

export default NavBar