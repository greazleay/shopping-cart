import React from "react";

const CartItem = (props) => {
    return (
        <div>
            <div>
                <img src={props.data.source} alt="" />
            </div>
            <p>{props.data.itemName}</p>
            <div>
                <p>${props.data.price}</p>
                <div>
                    <button onClick={() => props.increaseCount(props.data.id)}>+</button>
                    <span>{props.data.count}</span>
                    <button onClick={() => props.decreaseCount(props.data.id)}>-</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem