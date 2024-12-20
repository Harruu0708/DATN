import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../../styles/about-section.css';
import aboutImg from '../../assets/all-images/cars-img/bmw-offer.png';
const AboutSection = () => {
    return (
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="about__section-content">
                        <h4 className="section__subtitle">About Us</h4>
                        <h2 className="section__title">Welcome to car renting service</h2>
                        <p className="section__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. 
                            Quis ipsum suspend isse ultrices gravida. Risus commodo 
                            viverra maecenas accumsan lacus vel facilisis.
                        </p>
                        <div className="about__section-item d-flex align-items-center">
                            <p className="section__description d-flex align-items-center gap-2">
                                <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>

                            <p className="section__description d-flex align-items-center gap-2">
                                <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>

                        <div className="about__section-item d-flex align-items-center">
                            <p className="section__description d-flex align-items-center gap-2">
                                <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>

                            <p className="section__description d-flex align-items-center gap-2">
                                <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className="about__img">
                        <img src={aboutImg} alt="" className="w-100" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutSection;