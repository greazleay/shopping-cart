import React from "react";

const CartItem = (props) => {
    return (
        <div className="cart-item">
            <div>
                <img src={props.data.source} alt="" />
            </div>
            <p>{props.data.itemName}</p>
            <div>
                <p>Unit Price: ${props.data.price}</p>
                <p>Total Item Price: ${props.data.count * props.data.price}</p>
                <div>
                    <button onClick={() => props.decreaseCount(props.data.id)}>-</button>
                    <span>{props.data.count}</span>
                    <button onClick={() => props.increaseCount(props.data.id)}>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem