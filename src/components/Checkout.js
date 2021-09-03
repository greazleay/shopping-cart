import React from "react";
import CartItem from "./CartItem";
import "../assets/css/Checkout.css"

const Checkout = (props) => {
  const cartItemsList = props.cartItems.map((item) => item.count > 0 ? (
    <CartItem
      data={item}
      key={item.id}
      increaseCount={props.increaseCount}
      decreaseCount={props.decreaseCount}
    />
  ) : null);
  return (
    <main className="checkout">
      {props.cartItems.length === 0 ? <p>Your Cart is empty</p> : cartItemsList}
      <p>Total Price: ${props.totalPrice}</p>
    </main>
  );
};

export default Checkout;
