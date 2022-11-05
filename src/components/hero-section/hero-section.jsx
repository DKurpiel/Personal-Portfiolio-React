import React from "react";
import './hero-section.css';

import { Container, Row, Col } from "reactstrap";
import heroImg from '../../assets/hero-img.png';


const HeroSection = () => {
    return (
        <section className="hero__section" id="home">
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero__content">
                            <p className="mb-3">Welcome to my website</p>

                            <h2 className="hero__title mb-4">
                                I'm <span>Name</span>
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ab iure recusandae, omnis sint sed magnam reprehenderit? Reiciendis, deserunt iure.</p>

                            <div className="mt-5 hero__btns d-flex align-items-center gap-4">
                                <button className="btn">Contact</button>
                            </div>
                        </div>
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="hero__img">
                            <img src={heroImg} alt="" className="w-100" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default HeroSection