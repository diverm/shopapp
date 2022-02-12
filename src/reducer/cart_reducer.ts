import IProduct from "../model/IProduct";

type Action = {type:'ADD_TO_CART', payload: IProduct} 
| {type: 'REMOVE_FROM_CART', payload:string}
| {type :'INCREMENT', payload:string}
| {type :'DECREMENT', payload:string}

export interface ICart {
    id?:string,
    name?:string,
    image?:string,
    price?:number,
    qty?:number,
    amount?:number
}

type StateType = {
    products:ICart[],
    total:number
}

function removeFromCart(state:StateType, id:string) {
    const temp = state.products.filter(p => p.id !== id)
    if(temp) state.products=temp;
    return {products:state.products, total: state.total};
}

function increment(state:StateType, prd:ICart) {
    prd.qty && prd.qty++;
    if(prd.amount && prd.price) {
        prd.amount += prd.price
        state.total = state.total + prd.amount;
    }
    return {products:state.products, total: state.total};
}

let cartReducer = (state:StateType, action:Action) => {
    if(action.type === 'ADD_TO_CART') {
        const prdExisting = state.products.filter(p => p.id === item.id)[0];
        if(prdExisting) {
            return increment(state, prdExisting);
        }

        const product = {...action.payload};
        let item = {
            id:product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            qty: 1,
            amount: product.price
        }
        let cartItems = state.products;
        let total = state.total + product.price;
        return {products:[...cartItems, {...item}], total} 
    } else if (action.type === 'INCREMENT') {
        const prd = state.products.filter(p => p.id === action.payload)[0];
        return increment(state, prd);
        
    } else if (action.type === 'DECREMENT') {
        const prd = state.products.filter(p => p.id === action.payload)[0];
        if(prd.qty && prd.qty===1)
            return removeFromCart(state, action.payload)
        prd.qty && prd.qty--;
        if(prd.amount && prd.price) {
            prd.amount -= prd.price
            state.total = state.total - prd.amount;
        }
        return {products:state.products, total: state.total};
    } else if (action.type === 'REMOVE_FROM_CART') {
        return removeFromCart(state, action.payload)
    } else 
    return state;
}


export default cartReducer;