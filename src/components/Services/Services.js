import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';

const Services = () => {
    const [courses] = useCourses();
    return (
        <Container className="my-5">
            <div className="my-5">
                <h1 className="text-success">Services</h1>
                <h6>Explore Our Popular Courses</h6>
            </div>
            <Row xs={1} md={2} className="g-4">
                {
                    courses.map((course, index) => index >= 0 && index <= 3 ? <Course
                        key={course.id}
                        course={course}
                    ></Course>
                        : ''
                    )
                }
            </Row>
        </Container>
    );
};

export default Services;