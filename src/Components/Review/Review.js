import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const Review = () => {
    const [cart, setCart] = useState([]);

    // handle item remove
    const removeItem = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
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
        <Row>
            <h1>Cart Item {cart.length} </h1>

            <Col md={8} >
                {
                    cart.map(pd => <ReviewItems removeItem={removeItem} product={pd} key={pd.key} ></ReviewItems>)
                }
            </Col>
            <Col md={4}>
                <Cart cart={cart} showReviews={true}></Cart>
            </Col>

        </Row>
    );
};

export default Review;