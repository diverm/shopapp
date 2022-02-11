import {useContext} from 'react';
import { ProductContext } from '../context/ProductContext';
import Product from './Product';

const ProductList = () => {
    const {products} = useContext(ProductContext);
    return (
        <div className="container">
            <div className="row">
                {
                    products.map(p => <Product key={p.id} product={p}/>)
                }
            </div>
        </div>
    )
}

export default ProductList;