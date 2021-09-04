import "../assets/css/ItemDetails.css";
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const ItemDetails = ({ match, ...props }) => {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchItem = useCallback(async () => {
    const res = await fetch(
      `https://fakestoreapi.com/products/${match.params.id}`
    );
    const data = await res.json();
    setItem({...data, count: 1});
    setIsLoading(false);
  }, [match.params.id]);

  const raiseItemCount = () => {
    const updatedItem = {...item, count: item['count'] + 1}
    setItem(updatedItem)
  }

  const lowerItemCount = () => {
    const updatedItem = {...item, count: item['count'] === 0 ? 0 : item['count'] - 1}
    setItem(updatedItem)
  }

  useEffect(() => {
    fetchItem();
  }, [fetchItem]);

  const content = (
    <>
      <div className="item-box">
        <div className="item-box-img">
          <img src={item.image} alt="item" />
        </div>
        <div className="item-box-text-area">
          <div className="item-box-text">
            <h3 key={item.id}>{item.title}</h3>
            <p>${item.price}</p>
          </div>
          <div className="item-box-quantity">
            <span>Quantity:</span>
            <button onClick={lowerItemCount}>-</button>
            <span>{item.count}</span>
            <button onClick={raiseItemCount}>+</button>
          </div>
          <div>
            <Link to="/checkout">
              <button className="add-to-cart" id={item.id} onClick={() => props.addToCart(item)}>Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="item-description">
        <h2>Description</h2>
        <hr />
        <p>{item.description}</p>
      </div>
    </>
  );

  return (
    <main className="itemDetails">
      {isLoading ? <p>Loading Item....</p> : content}
    </main>
  );
};

export default ItemDetails;
