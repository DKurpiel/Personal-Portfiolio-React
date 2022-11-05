import React from 'react'
import './portfolio.css'

import { Container, Row, Col } from 'reactstrap'
import img01 from '../../assets/portfolio-01.jpg'
import img02 from '../../assets/portfolio-02.jpg'
import img03 from '../../assets/portfolio-03.jpg'

const portfolioData = [
    {
        imgUrl: img01,
        title: 'Website',
        url: '#'
    },
    {
        imgUrl: img02,
        title: 'Artificial Intelligence',
        url: '#'
    },
    {
        imgUrl: img03,
        title: 'React App',
        url: '#'
    },
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <Container>
                <Row>
                    <Col lg='12' className='portfolio__top mb-5'>
                        <h6>Explore my work</h6>
                        <h2>Portfolio</h2>
                    </Col>

                    {
                        portfolioData.map((item, index) => (
                            <Col lg='4' md='6' sm='6' key={index}>
                                <div className='portfolio__card'>
                                    <div className="portfolio__img">
                                        <img src={item.imgUrl} alt="" className='w-100' />
                                    </div>

                                    <div className="portfiolio__content">
                                        <h5>{item.title}</h5>
                                        <a href={item.url}>View live demo</a>
                                    </div>
                                </div>
                            </Col>
                        ))};

                </Row>
            </Container>
        </section>
    )
}

export default Portfolio