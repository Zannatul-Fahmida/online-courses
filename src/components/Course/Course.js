import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    const {img, name, price} = props.course;
    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={img} height="250" />
                <Card.Body className="text-start">
                    <h5 className="text-success">${price}</h5>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;