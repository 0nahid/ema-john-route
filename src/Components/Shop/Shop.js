import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import fakeData from './../../fakeData/index';

const Shop = () => {
    // const first20 = fakeData.slice(0, 20);
    // eslint-disable-next-line
    const [products, setProducts] = useState(fakeData);
    const [cart, setCart] = useState([])
    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key, count);
    }
    return (
        <div>
            <Cart cart={cart} />
            <Row>
                {products.map(product => <Product
                    product={product}
                    showAddToCart={true}
                    key={product.key}
                    handleAddProduct={handleAddProduct}
                    showReviews={false}
                ></Product>)}
            </Row>
        </div>
    );
};

export default Shop;