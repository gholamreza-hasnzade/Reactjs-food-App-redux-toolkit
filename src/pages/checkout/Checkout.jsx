import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useSelector } from "react-redux";

import Helmet from "../../components/helmet/Helmet";
import { CommonSection } from "../../components/UI";

import "./checkout.css";

const Checkout = () => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;
  const totalAmount = cartTotalAmount + Number(shippingCost);

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
            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>$ {cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping: <span>$ {shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>$ {totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
