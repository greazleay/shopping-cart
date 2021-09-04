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

  const content = <div className="content">
    <div className="order-area">
      <h3 >Your Shopping Cart</h3><hr />
      <div className="order-table">
        <div className="item">ITEM</div>
        <div className="quantity">QUANTITY</div>
        <div className="unit-price">Unit-Price</div>
        <div className="sub-total">Sub-Total</div>
        {cartItemsList}
      </div>
    </div>
    <div className="order-summary">
      <h3>Order Summary</h3><hr />
      <p>Quantity: {props.itemsTotal} Items</p>
      <p>Total Price: ${props.totalPrice.toFixed(2)}</p>
      <button onClick={handleClick}>Checkout</button>
    </div>
  </div>


  return (
    <main className="checkout">
      <Link to="/shop">
        <button className="continue">← Continue Shopping</button>
      </Link>
      {props.cartItems.map(i => i.count).every(i => i === 0) ? <p>Your Cart is empty</p> : content}
    </main>
  );
};

export default Checkout;
