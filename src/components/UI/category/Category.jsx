import React from "react";

import { Container, Row, Col } from "reactstrap";
import { IMAGES } from "../../../constants/content";

import "./category.css";

const categoryData = [
  {
    display: "Fastfood",
    imgUrl: IMAGES.CATEGORYIMG_01,
  },
  {
    display: "Pizza",
    imgUrl: IMAGES.CATEGORYIMG_02,
  },
  {
    display: "Asian Food",
    imgUrl: IMAGES.CATEGORYIMG_03,
  },
  {
    display: "Row Meat",
    imgUrl: IMAGES.CATEGORYIMG_04,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" key={index} sm="6" xs="6" className="mb-4">
            <div className="category__item d-flex align-items-center gap-3" >
              <div className="category__img" >
                <img src={item.imgUrl} alt={item.display} />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
