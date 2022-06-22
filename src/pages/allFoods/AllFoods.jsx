import React from "react";
import { Container, Row, Col } from "reactstrap";

import Helmet from "../../components/helmet/Helmet";
import { CommonSection, ProductCard } from "../../components/UI";

import products from "../../assets/fake-data/products";

import "./all-foods.css";

const AllFoods = () => {
  return (
    <Helmet title="All Foods">
      <CommonSection title="All Foods" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="search__widget">
                <input type="text" placeholder="I'm looking for..." />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="sorting__widget">
                <select>
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {products.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6">
                <ProductCard key={item.id} item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
