import React from "react";
import { useParams } from "react-router-dom";

import products from "../../assets/fake-data/products";
import Helmet from "../../components/helmet/Helmet";
import { CommonSection } from "../../components/UI";

import { Container, Row, Col } from "reactstrap";
import { IMAGES } from "../../constants/content";

import "./food-details.css";

const FoodDetails = () => {
  return (
    <Helmet title={`Product-details`}>
      <CommonSection title={"product 01"} />

      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images">
                <div className="img__item">
                  <img src={IMAGES.ProductImg_01_1} alt="" className="w-50"/>
                </div>
                <div className="img__item">
                  <img src={IMAGES.ProductImg_01_1} alt="" className="w-50"/>
                </div>
                <div className="img__item">
                  <img src={IMAGES.ProductImg_01_1} alt="" className="w-50"/>
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={IMAGES.ProductImg_01_1} alt="" className="w-100" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">Pizza with mushroom</h2>
                <p className="product__price">Price: <span>$ 345</span> </p>
                <p className="category mb-5">Category : <span>Burger</span> </p>

                <button className="addToCart__btn">Add to Cart</button>
              </div>
            </Col>

            <Col lg="12">
              <div className="tabs">
                <h6>Descriptions</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
