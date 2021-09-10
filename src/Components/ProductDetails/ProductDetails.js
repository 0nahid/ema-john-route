import React from 'react';
import { useParams } from 'react-router';
import Product from '../Product/Product';
import fakeData from './../../fakeData/index';

const ProductDetails = () => {
    const {productKey} = useParams()
    const product = fakeData.find(pd => pd.key === productKey);
    return (
        <div>
            <h1>Product Details.</h1>
            <Product showAddToCart={false} product={product} ></Product>
        </div>
    );
};

export default ProductDetails;