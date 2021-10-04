import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';

const ServicesDetails = () => {
    const [courses] = useCourses();
    return (
        <Container className="mt-3 mb-5">
            <h1 className="text-success fw-bold mb-3">Services</h1>
            <Row xs={1} md={3} className="g-4">
            {
                courses.map(course => <Course course={course}></Course>)
            }
            </Row>
        </Container>
    );
};

export default ServicesDetails;