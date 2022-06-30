import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";

import { CommonSection } from "../../components/UI";
import Helmet from "../../components/helmet/Helmet";

const Cart = () => {
  return (
    <Helmet title={"cart"}>
      <CommonSection title={"Your cart"} />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </tr>
                </thead>
              </table>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Cart;
