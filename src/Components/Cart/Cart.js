import { Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, product) => total = (total + product.price), 0);
    const shipping = cart.reduce((shipping, product) => shipping = (shipping + product.shipping), 0);
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div className="text-lg-end rounded shadow p-3">
            <h1>Order Summary</h1>
            <h4>Items Ordered : {cart.length} </h4>
            <h4>Total: ${formatNumber(total)} </h4>
            <h4>Shipping: ${formatNumber(shipping)}</h4>
            <Link to='/review'><Button variant='dark'>Review Order</Button></Link>
        </div>
    );
};

export default Cart;