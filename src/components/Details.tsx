import {useParams} from 'react-router-dom';
import {useContext, useState, useEffect} from 'react';
import IProduct from '../model/IProduct';
import { ProductContext } from '../context/ProductContext';

const Details = () => {
    let [product, setProduct] = useState<IProduct | null> (null);
    let {id} = useParams();

    let {handleDetail} = useContext(ProductContext);
    
    useEffect(() => {
        let p = handleDetail(id); // change to API call
        setProduct(p);
    }, [id]);

    // console.log(id);
    if(product) {
        let {name, price, image} = product;
        return (
            <div className="container">
                <h1>Name : {name}</h1>
                <h3>Price: {price }</h3>
            </div>
        )
    } else     return  <h1>Product not found for {id}</h1>
}

export default Details;