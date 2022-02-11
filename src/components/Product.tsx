import { Link } from "react-router-dom";
import IProduct from "../model/IProduct";
import { Button } from "./Button";
import React from "react";
import { CartContext } from "../context/CartContext";

type IAppProps = {
    product: IProduct
}

function Product(props:IAppProps) {
    let {id, name, image} = props.product;
    let {addToCart} = React.useContext(CartContext);
    return (
        <div className="col-md-4 col-lg-3">
            <div className="card my-2">
                <div className="img-container">
                    <Link to={`/details/${id}`}>
                         <img src={image} alt={name} style={{width:'100%', height:'200px'}}/>
                    </Link>
                    <Button className="cart-btn fa fa-cart-plus" 
                        onClick={() => addToCart(id)}/>
                </div>
            </div>
        </div>
    )
}

export default Product;