import React from "react";
import CartItem from "./CartItem";
import "../assets/css/Checkout.css"
import { Link } from "react-router-dom";

const Checkout = (props) => {
  
  const handleClick = () => {
    alert("Order Received!!! Thank you for your patronage")
  }
  const cartItemsList = props.cartItems.map((item) => item.count > 0 ? (
    <CartItem
      data={item}
      key={item.id}
      increaseCount={props.increaseCount}
      decreaseCount={props.decreaseCount}
    />
  ) : null);

  const content = <>
    <h3 >Your Shopping Cart</h3><hr className="cart-header"/>
      <div className="order-area">
      {props.cartItems.length === 0 ? <p>Your Cart is empty</p> : cartItemsList}
      <div className="order-summary">
        <h3>Order Summary</h3><hr/>
        <p>{props.itemsTotal} Items</p>
        <p>Total Price: ${props.totalPrice}</p>
        <button onClick={handleClick}>Continue to Checkout</button>
      </div>  
      </div>
  </>


  return (
    <main className="checkout">
      <Link to="/shop">
        <button>← Continue Shopping</button>
      </Link>
      {props.cartItems.map(i => i.count).every(i => i === 0) ? <p>Your Cart is empty</p> : content}
    </main>
  );
};

export default Checkout;
