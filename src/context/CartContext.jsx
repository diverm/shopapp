import React from "react";
import cartReducer from "../reducer/cart_reducer";
import { ProductContext } from "./ProductContext";
import axios from 'axios';

const initialState = {
    products:[],
    total: 0
}

export const CartContext = React.createContext();

export const CartProvider = (props) => {
    let [state, dispatch] = React.useReducer(cartReducer, initialState);
    let {products} = React.useContext(ProductContext);

    function addToCart(id) {
        let prd = products.filter(p => p.id === id)[0];
        dispatch({type:'ADD_TO_CART', payload :prd})
    }

    function increment(id) {
        dispatch({type:'INCREMENT', payload:id})
    }

    function decrement(id) {
        dispatch({type:'DECREMENT', payload:id})
    }

    function removeFromCart(id) {
    	dispatch({type:'REMOVE_FROM_CART', payload:id})
    }

    function checkout() {
        axios.post("http://localhost:1234/orders", state).then(
            console.log("order placed!!!")
        )
    }
    return <CartContext.Provider value={{cart:state.products, 
            addToCart:addToCart, 
            increment:increment,
            decrement:decrement,
            removeFromCart:removeFromCart,
            checkout: checkout}}>
        {props.children}
    </CartContext.Provider>
}