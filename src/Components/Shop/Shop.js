import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import fakeData from './../../fakeData/index';

const Shop = () => {
    const first15 = fakeData.slice(0, 15);
    // eslint-disable-next-line
    const [products, setProducts] = useState(first15);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart()
        const savedKeys = Object.keys(savedCart);
        const prevCart = savedKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = savedKeys[existingKey];
            return product;
        })
        setCart(prevCart);
    }, []);

    const handleAddProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
            console.log(sameProduct);
        } else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
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