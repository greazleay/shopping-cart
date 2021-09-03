import "../assets/css/ItemDetails.css";
import React, { useState, useEffect, useCallback } from "react";

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
        <img src={item.image} alt="item" />
        <div>
          <p key={item.id}>{item.title}</p>
          <p>${item.price}</p>
          <div>
            <button onClick={lowerItemCount}>-</button>
            <span>{item.count}</span>
            <button onClick={raiseItemCount}>+</button>
          </div>
          <button id={item.id} onClick={() => props.addToCart(item)}>Add to cart</button>
        </div>
      </div>
      <div>
        <h3>Description</h3>
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
