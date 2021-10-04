import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import Rating from 'react-rating';

const Course = (props) => {
    const { img, name, price, rating } = props.course;
    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={img} height="250" />
                <Card.Body className="text-start">
                    <h5 className="text-success">${price}</h5>
                    <Card.Title>{name}</Card.Title>
                    <p>{rating} <Rating
                        initialRating={rating}
                        readonly
                        emptySymbol="far fa-star text-warning"
                        fullSymbol="fas fa-star text-warning"
                    /></p>
                    <Button variant="success">Join Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;