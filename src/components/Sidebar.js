import React from "react";

const SideBar = (props) => {
  return (
    <div className="sidebar">
      <h3>Browse Categories</h3>
      <ul>
        <li onClick={props.handleClick}>All Items</li>
        <li onClick={props.handleClick}>Men's clothing</li>
        <li onClick={props.handleClick}>Women's clothing</li>
        <li onClick={props.handleClick}>Jewelery</li>
        <li onClick={props.handleClick}>Electronics</li>
      </ul>
    </div>
  );
};

export default SideBar;
