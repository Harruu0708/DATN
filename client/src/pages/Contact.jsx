import React from "react";

import { Link } from "react-router-dom";
import { Container, Row, Col,Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import '../styles/contact.css';
import CommonSection from "../components/UI/CommonSection";

const Contact = () => {
    const socialLinks = [
        {
            icon: 'ri-facebook-fill',
            url: 'https://www.facebook.com/'
        },
        {
            icon: 'ri-instagram-fill',
            url: 'https://www.instagram.com/'
        },
        {
            icon: 'ri-twitter-fill',
            url: 'https://twitter.com/'
        }
    ];
  return <Helmet title='Contact'>
    <CommonSection title="Contact"/>
    <section>
        <Container>
            <Row>
                <Col lg='7' md='7'>
                    <h6 className='fw-bold'>Get In Touch</h6>
                

                    <Form>
                        <FormGroup className="contact__form">
                            <Input placeholder="Your name" type="text"/>
                        </FormGroup>
                        <FormGroup className="contact__form">
                            <Input placeholder="Email" type="email"/>
                        </FormGroup>
                        <FormGroup className="contact__form">
                            <textarea row={5} placeholder="Message" className="textarea"></textarea>
                        </FormGroup>

                        <button className="contact__btn" type="submit">Send</button>
                    </Form>
                </Col>

                <Col lg="5" md="5">
                    <div className="contact__info">
                        <h6 className="fw=bold">Contact Information</h6>
                        <p className="section__description mb-0">
                            Hanoi University of Science and Technology
                        </p>

                        <div className="d-flex align-items-center gap-2">
                            <h6 className="fs-6 mb-0">Phone:</h6>
                            <p className="section__description mt-3">012345678</p>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                            <h6>Email:</h6>
                            <p className="section__description mt-2">haru@gmail.com</p>
                        </div>

                        <h6 className="fw-bold">Follow Us</h6>
                        <div className="d-flex align-items-center gap-4 mt-3">
                            {
                                socialLinks.map((item, index) => (
                                    <Link to={item.url} key={index} className="social__link-icon"><i class={item.icon}></i></Link>
                                ))
                            }
                        </div>

                    </div>

                </Col>
            </Row>
        </Container>
    </section>
  </Helmet>
};

export default Contact;