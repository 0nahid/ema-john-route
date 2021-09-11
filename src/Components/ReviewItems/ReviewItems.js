import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
const ReviewItems = (props) => {
    const { name, quantity, key, img } = props.product;
    return (
        <>
            <div className="shadow-sm mt-2  rounded p-3">
                <Row>
                    <Col md={3}>
                        <img className="w-75 h-75" src={img} alt={name} />
                    </Col>
                    <Col md={9}>
                        <h6>{name}</h6>
                        <p>Quantity: {quantity}</p>
                        <Button onClick={() => props.removeItem(key)} variant="danger">Remove</Button>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default ReviewItems;