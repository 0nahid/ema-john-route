import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Nomatch = () => {
    return (
        <div>
            <Row>
                <Col className="text-center mt-5">
                    <h1 className="text-danger">Whoops!</h1>
                    <h1 className="text-danger text-6xl">404 Error!!!</h1>
                </Col>
            </Row>
        </div>
    );
};

export default Nomatch;