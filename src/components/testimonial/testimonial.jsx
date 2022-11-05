import React from 'react'
import './testimonial.css'

import { Container, Row, Col } from 'reactstrap'
import Slider from 'react-slick'

const Testimonials = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToslide: true
    }

    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5 text-center'>
                        <h2>What my clients says</h2>
                    </Col>
                    <Col lg='6' className='m-auto' >
                        <Slider {...settings}>
                            <div>
                                <div className="single__testimonial">
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt temporibus qui distinctio cum minus harum commodi numquam quasi ipsam illum!
                                    </p>
                                    <h6>Oliver Brown</h6>
                                    <p className='title'>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                            <div>
                                <div className="single__testimonial">
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt temporibus qui distinctio cum minus harum commodi numquam quasi ipsam illum!
                                    </p>
                                    <h6>Jacob Wilson</h6>
                                    <p className='title'>Lorem ipsum dolor sit amet.</p>

                                </div>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Testimonials;