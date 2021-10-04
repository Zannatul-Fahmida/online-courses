import React from 'react';
import { Col, Container, Row, Button, Image } from 'react-bootstrap';

const TopBanner = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col className="text-start d-flex flex-column justify-content-center">
                    <h5 className="text-success">START LEARNING FROM HOME</h5>
                    <h1 className="fw-bold my-3">Connect With Our Expert And Start Learning Today</h1>
                    <p>We are providing high-quality online lessons to improve your skill. Our all instructors are highly experienced and experts.</p>
                    <div>
                        <Button variant="success">Explore courses</Button>
                    </div>
                </Col>
                <Col>
                    <Image src="https://uttoron.academy/wp-content/uploads/2020/09/Group-12852@2x.png" alt="" fluid />
                </Col>
            </Row>
        </Container>
    );
};

export default TopBanner;