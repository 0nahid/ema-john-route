import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
const Product = (props) => {
    const product = props.product;
    const { name, price, shipping, seller, stock, img, key } = product;
    return (
        <>
            <Col md={6} lg={4} className="p-3 mt-2">
                <div className="shadow-sm  rounded">
                    <Row>
                        <Col lg={12} style={{ height: '21rem' }}>
                            <div className="text-center">
                                <img src={img} className="img-fluid" alt="" />
                            </div>
                            <p><Link to={`/product/` + key}>{name}</Link></p></Col>
                        <p>By: <small>{seller}</small> </p>
                        <Col lg={12}>
                            <p>Only {stock} items left </p>
                            <p><small>Price :<span className="text-danger font-bold">${price} only</span> </small></p>
                            <p><small>Shipping :<span className="text-danger font-bold">${shipping}</span> </small></p>
                            {props.showAddToCart && <Button variant="dark" onClick={() => props.handleAddProduct(product)}> <FaCartPlus /> Add To Cart</Button>}
                        </Col>
                    </Row>
                </div>
            </Col>
        </>
    );
};

export default Product;