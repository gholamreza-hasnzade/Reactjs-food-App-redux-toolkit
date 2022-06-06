import React from "react";
import { Col, Container, Row } from "reactstrap";

import Helmet from "../../components/helmet/Helmet";
import { IMAGES } from "../../constants/content";


import "./home.css"
const Home = () => {
  return (
    <Helmet title={"Home"}>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Esay way to make an order</h5>
                <h1 className="mb-4">
                  <span>HUNGRY?</span>Just wait food at<span> your door</span>
                </h1>

                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Natus eum velit tempore obcaecati inventore praesentium
                  delectus fugiat quod itaque? Quae, ratione cupiditate quod
                  vero possimus labore cum voluptates. Quasi, harum.
                </p>
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
    </Helmet>
  );
};

export default Home;
