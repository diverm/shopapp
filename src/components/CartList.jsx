import React from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "./Button";

const CartList = ({ product }) => {
    let {id,name,price,image,qty, amount} = product;
    let {increment, decrement, removeFromCart} = React.useContext(CartContext);
    return (
        <div className="row">
            <div className="col-md-2">
                <img src={image} style={{"width":"50px", "height": "50px"}}/>
            </div>
            <div className="col-md-2 buttonMe">
                <Button onClick={() => increment(id)}>+</Button>
                <Button onClick={() => decrement(id)}>-</Button>
                <Button className="fa fa-solid fa-trash" onClick={() => removeFromCart(id)}></Button>
            </div>
            <div className="col-md-2">
                Name: {name}
            </div>
            <div className="col-md-2">
                Price : {price}
            </div>
            <div className="col-md-2">
                Qty: {qty}
            </div>
            <div className="col-md-2">
                Amount : {amount}
            </div>
            <hr/>
        </div>
    )
}

export default CartList;