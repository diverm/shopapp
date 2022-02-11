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

let cartReducer = (state:StateType, action:Action) => {
    if(action.type === 'ADD_TO_CART') {
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
        const prd = state.products.filter(p => p.id === action.payload)[0]
        prd.qty && prd.qty++;
        if(prd.amount && prd.price) {
            prd.amount += prd.price
            state.total = state.total + prd.amount;
        }
        return {products:state.products, total: state.total};
    } else 
    return state;
}


export default cartReducer;