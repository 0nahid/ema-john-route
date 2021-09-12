import { Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    // const total = cart.reduce((total, product) => total = (total + (product.price * product.quantity)), 0);

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
        debugger;
    }
    console.log(total);

    const shipping = cart.reduce((shipping, product) => shipping = (shipping + product.shipping), 0);
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