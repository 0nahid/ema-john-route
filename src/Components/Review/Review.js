import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItems from '../ReviewItems/ReviewItems';

const Review = () => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        // cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, [])
    return (
        <div>
            <h1>Cart Item {cart.length} </h1>
            <Row>
                {
                    cart.map(pd => <ReviewItems product={pd} key={pd.key} ></ReviewItems>)
                }
            </Row>
        </div>
    );
};

export default Review;