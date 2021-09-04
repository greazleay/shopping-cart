import React from "react";

const CartItem = (props) => {
    return (
        <div className="cart-item">
            <div className="item">
                <img src={props.data.source} alt="" />
                <p>{props.data.itemName}</p>
            </div>
            <div className="quantity">
                <button onClick={() => props.decreaseCount(props.data.id)}>-</button>
                <span>{props.data.count}</span>
                <button onClick={() => props.increaseCount(props.data.id)}>+</button>
            </div>
            <p className="unit-price">Unit Price: ${props.data.price}</p>
            <p className="sub-total">Total Item Price: ${props.data.count * props.data.price}</p>
        </div>
    )
}

export default CartItem