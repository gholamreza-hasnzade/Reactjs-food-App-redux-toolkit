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
              <div
                className="search__widget d-flex align-items-center 
              justify-content-between w-50"
              >
                <input type="text" placeholder="I'm looking for..." />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {products.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4">
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
