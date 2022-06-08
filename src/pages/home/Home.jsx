import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

import Helmet from "../../components/helmet/Helmet";
import { Category } from "../../components/UI";
import { IMAGES } from "../../constants/content";

import "./home.css";


const Home = () => {
  return (
    <Helmet title={"Home"}>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Esay way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span>Just wait <br /> food at
                  <span> your door</span>
                </h1>

                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Natus eum velit tempore obcaecati inventore praesentium.
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button
                    type="button"
                    className="order__btn d-flex align-items-center justify-content-between"
                  >
                    Order now <i className="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn ">
                    <Link to={"/foods"}>See all foods</Link>
                  </button>
                </div>

                <div className="hero__service d-flex align-content-center  gap-4 mt-5">
                  <p className="d-flex align-content-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>
                    No shipping charge
                  </p>

                  <p className="d-flex align-content-center gap-2">
                    <span className="shipping__icon">
                    <i className="ri-shield-check-line"></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={IMAGES.HEROIMG} alt="hero img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      <section className="pt-0">
        <Category />
      </section>
    </Helmet>
  );
};

export default Home;
