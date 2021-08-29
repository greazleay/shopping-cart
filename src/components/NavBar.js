import React from "react";
import bag from "../appData/images/shopping-cart.png";
import logo from "../appData/images/h2.png"

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <img src={logo} alt=""/>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Support</li>
            </ul>
            <img src={bag} alt=""/>
        </nav>
    )
}

export default NavBar