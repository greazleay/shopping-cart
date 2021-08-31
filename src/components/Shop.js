import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "./Sidebar";

const Shop = (props) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");

  const fetchItems = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setItems(data);
    setIsLoading(false);
  };

  const handleClick = (elm) => {
    const { textContent } = elm.target;
    setFilter(textContent);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const filteredItems =
    filter === "" || filter === "All Items"
      ? items
      : items.filter(
        (item) => item.category.substring(1) === filter.substring(1)
      );

  const itemList = filteredItems.map((item) => (
    <div key={item.id} className="shop-item">
      <Link to={`/shop/${item.id}`}>
        <div>
          <img src={item.image} alt="" />
        </div>
      </Link>
      <p>{item.title}</p>
      <p>${item.price}</p>
      <button onClick={props.updateCart}>Add to cart</button>
    </div>
  ));
  return (
    <main className="shop">
      <SideBar handleClick={(e) => handleClick(e)} />
      {isLoading ? (
        <p>Loading Items....</p>
      ) : (
        <div className="shop-items">{itemList}</div>
      )}
    </main>
  );
};

export default Shop;
