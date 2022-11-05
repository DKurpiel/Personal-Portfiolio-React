import React, { useState } from 'react';
import './about.css';

import { Container, Row, Col } from 'reactstrap';
import aboutImg from '../../assets/about.png';
import Education from './education';
import Skills from './skills';
import Award from './award';

const About = () => {

    const [aboutFilter, setAboutFilter] = useState('ABOUT')

    return (
        <section id="about">
            <Container>
                <Row>
                    <Col lg='12' className='mb-5'>
                        <h2>About Me</h2>{" "}
                    </Col>

                    <Col lg='4' md='3'>
                        <div className="about__btns d-flex flex-column align-items-center">
                            <button
                                className={`about__btn ${aboutFilter === 'ABOUT' ? 'about__btn-active' : ''}`}
                                onClick={() => setAboutFilter('ABOUT')}>About Me
                            </button>
                            <button
                                className={`about__btn ${aboutFilter === 'EDUCATION' ? 'about__btn-active' : ''}`}
                                onClick={() => setAboutFilter('EDUCATION')}>Education
                            </button>
                            <button
                                className={`about__btn ${aboutFilter === 'SKILLS' ? 'about__btn-active' : ''}`}
                                onClick={() => setAboutFilter('SKILLS')}>Skills
                            </button>
                            <button
                                className={`about__btn ${aboutFilter === 'AWARD' ? 'about__btn-active' : ''}`}
                                onClick={() => setAboutFilter('AWARD')}>Award
                            </button>
                        </div>
                    </Col>

                    <Col lg='8' md='9'>

                        {
                            aboutFilter === 'ABOUT' && <div className="about__content__wrapper d-flex gap-5">
                                <div className="about__img w-25">
                                    <img src={aboutImg} alt="" className='w-100' />
                                </div>


                                <div className="about__content w-75">
                                    <h2>Web Developer</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eaque provident ducimus nihil officiis atque sunt maiores nostrum minima saepe! Obcaecati numquam illo officiis similique rerum ea commodi necessitatibus. Quis?</p>

                                    <div className="social__links">
                                        <h6 className='mb-3'>Connect with me:</h6>
                                        <span><a href="#"><i class="ri-facebook-line"></i></a></span>
                                        <span><a href="#"><i class="ri-youtube-line"></i></a></span>
                                        <span><a href="#"><i class="ri-github-line"></i></a></span>
                                    </div>
                                </div>
                            </div>
                        }

                        {aboutFilter === 'EDUCATION' && <Education />}

                        {aboutFilter === 'SKILLS' && <Skills />}

                        {aboutFilter === 'AWARD' && <Award />}



                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;