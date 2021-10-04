import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container fluid className="bg-light fixed-bottom">
            <p className="text-dark pt-3"><small>&copy; Copy 2021. All Rights Reserved</small></p>
        </Container>
    );
};

export default Footer;