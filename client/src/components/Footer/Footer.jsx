import React from 'react';

import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../../styles/footer.css';

const quickLinks = [
  {
    path:'/about',
    display: 'About'
  },
  {
    path:'#',
    display: 'Privacy Policy'
  },
  {
    path:'/cars',
    display: 'Car Listing'
  },
  {
    path:'/purchases',
    display: 'Purchase'
  },
  {
    path:'/contact',
    display: 'Contact'
  },
];
const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();
  return (<footer className="footer">
    <Container>
      <Row>
        <Col lg='4' md='4' sm='12'>
          <div className="logo footer__logo">
            <h1><Link to ='/home' className="d-flex align-items-center gap-2">
              <i class='ri-car-line'></i>
              <span>Rent Car <br /> Service</span>
              </Link>
            </h1>
          </div>
          <p className="footer__logo-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Col>

        <Col lg='2' md='4' sm='6'>
          <div className="mb-4">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup>
              {
                quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </div>
        </Col>

        <Col lg='3' md='4' sm='6'>
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">Hanoi Vietnam</p>
              <p className="office__info">Phone: +84 12345678</p>
              <p className="office__info">Email: carrenting@gmail.com</p>
            </div>
        </Col>

        <Col lg='3' md='4'>
              <div className="mb-4">
                <h5 className="footer__link-title">Newsletter</h5>
                <p className="section__description">Subcribe our newsletter</p>
                <div className="newsletter">
                  <input type='email' placeholder='Email' ></input>
                  <span><i class="ri-send-plane-line"></i> </span>
                </div>
              </div>
        </Col>

        <Col lg='12'>
              <div className="footer__bottom">
                <div className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                  <i class="ri-copyright-line"></i>Copyright{year},
                  Developed by Haru. All rights reserved.
                </div>
              </div>
        </Col>
      </Row>
    </Container>
  </footer>
  );
}

export default Footer;