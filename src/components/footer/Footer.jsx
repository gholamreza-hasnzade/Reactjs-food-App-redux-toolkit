import React from "react";
import { Col, Container, Row, ListGroup, ListGroupItem } from "reactstrap";
import { IMAGES } from "../../constants/content";

import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={IMAGES.LOGO} alt="food_footer" />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Incidunt id libero deleniti pariatur?
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00 am - 11:00 pm</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item  border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Location: Tehran Iran</span>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: +98 0936 978 0985</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item  border-0 ps-0">
                <span>gholamreza.hassanzade.1994@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">NewsLetter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2022, website by Gholamreza hasanzadeh. All Rights
              Reserved
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="socail__links d-flex aligin-items-center gap-4 justify-content-end">
              <p className="mb-0">Follow: </p>
              <span>
                <Link to="https://www.linkedin.com/in/gholamreza-hasanzadeh-tabrizi-7004a4190">
                  <i className="ri-linkedin-fill"></i>
                </Link>
              </span>

              <span>
                <Link to="https://github.com/gholamreza-hasnzade">
                  <i className="ri-github-fill"></i>
                </Link>
              </span>

              <span>
                <Link to="#">
                  <i className="ri-youtube-line"></i>
                </Link>
              </span>

              <span>
                <Link to="#"> 
                  <i className="ri-twitter-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
