import React from "react";
import bag from "../assets/images/shopping-cart.png";
import logo from "../assets/images/h2.png"
import { Link } from "react-router-dom";

const NavBar = (props) => {
    return (
        <nav className="nav-bar">
            <img src={logo} alt="logo" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/checkout">Checkout</Link></li>
            </ul>
            <div>
                <Link to="/checkout"><img src={bag} alt="cartImage" /></Link>
                <span>{props.cart}</span>
            </div>
        </nav>
    )
}

export default NavBar