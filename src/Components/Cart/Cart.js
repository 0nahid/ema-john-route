import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = ({ cart }) => {
  const [total, setTotal] = useState(0);

  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };

  const updateTotal = () => {
    let prices = [];
    let totalPrice = 0;

    if (cart.length !== 0 || cart.length > 0) {
      cart.map((product) => prices.push(product.price));
      totalPrice = prices.reduce((prev, curr) => prev + curr);
    }

    setTotal(totalPrice);
  };

  useEffect(() => {
    updateTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const shipping = cart.reduce(
    (shipping, product) => (shipping = shipping + product.shipping),
    0
  );

  return (
    <div className="text-lg-end rounded shadow p-3">
      <h1>Order Summary</h1>
      <h4>Items Ordered : {cart.length} </h4>
      <h4>Total: ${formatNumber(total)} </h4>
      <h4>Shipping: ${formatNumber(shipping)}</h4>

      <Link to="/review">
        <Button variant="dark">Review Order</Button>
      </Link>
    </div>
  );
};

export default Cart;
