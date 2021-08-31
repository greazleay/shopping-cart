import React, { useState, useEffect, useCallback } from "react";

const ItemDetail = ({ match }) => {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchItem = useCallback(async () => {
    const res = await fetch(
      `https://fakestoreapi.com/products/${match.params.id}`
    );
    const data = await res.json();
    setItem(data);
    setIsLoading(false);
  }, [match.params.id]);

  useEffect(() => {
    fetchItem();
  }, [fetchItem]);

  const content = (
    <>
      <p key={item.id}>{item.title}</p>
      <img src={item.image} alt="" />
    </>
  );

  return <main>{isLoading ? <p>Loading Item....</p> : content}</main>;
};

export default ItemDetail;
