import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container className="d-flex flex-column align-items-center">
            <h1 className="text-success fw-bold my-3">Contact Us</h1>
            <Form className="my-3 w-50 text-start">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Enter your name here" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="Enter your Email here" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="Your Message" />
                </Form.Group>
                <Form.Check
                    inline
                    label="I agree that my submitted data is being collected and stored."
                />
            </Form>
            <Button variant="success" className="text-center">Submit</Button>
        </Container>
    );
};

export default Contact;