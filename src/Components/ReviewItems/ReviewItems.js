import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
const ReviewItems = (props) => {
    const { name, quantity } = props.product;
    return (
        <Col md={6} lg={4} className="p-3 mt-2">
            <div className="shadow-sm  rounded p-3">
                <Row>
                    <Col lg={12} style={{ height: '12rem' }}>
                        <h5>{name}</h5>
                        <p>Quantity: {quantity}</p>
                    </Col>
                    <Col lg={12}>
                        <Button variant="warning">Remove</Button>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};

export default ReviewItems;