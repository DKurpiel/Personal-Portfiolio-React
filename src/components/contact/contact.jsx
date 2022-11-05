import React from 'react'
import './contact.css'

import { Container, Row, Col } from 'reactstrap';
import Form from '../form/form';


const Contact = () => {
    return (
        <section id='contact'>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5'>
                        <h2>Get In Touch</h2>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="contact_info_container d-flex align-item-center gap-5">
                            <div className="single_info-box w-50">
                                <h6>Address</h6>
                                <p>Rzeszów</p>
                            </div>

                            <div className="single_info-box w-50">
                                <h6>Phone</h6>
                                <p>123 456 789</p>
                            </div>
                        </div>

                        <div className="contact_info_container d-flex align-item-center gap-5">
                            <div className="single_info-box w-50">
                                <h6>Email</h6>
                                <p>office@example.com</p>
                            </div>

                            <div className="single_info-box w-50">
                                <h6>Location</h6>
                                <p>Poland</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg='6' md='6'>
                        <Form />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;