import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useSelector } from "react-redux";

import Helmet from "../../components/helmet/Helmet";
import { CommonSection } from "../../components/UI";

const Checkout = () => {
  return (
    <Helmet title={"Checkout"}>
      <CommonSection title={"Checkout"} />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>
              <form className="checkout__form">
                <div className="form__group">
                  <input type="text" placeholder="Enter your name" />
                </div>

                <div className="form__group">
                  <input type="email" placeholder="Enter your email" />
                </div>

                <div className="form__group">
                  <input type="number" placeholder="Phone number" />
                </div>

                <div className="form__group">
                  <input type="text" placeholder="Enter your Country" />
                </div>

                <div className="form__group">
                  <input type="text" placeholder="Enter your city" />
                </div>

                <div className="form__group">
                  <input type="number" placeholder="Postal code" />
                </div>


                <button className="addToCart__btn">Payment</button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
