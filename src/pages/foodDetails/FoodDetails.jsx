import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import products from "../../assets/fake-data/products";
import Helmet from "../../components/helmet/Helmet";
import { CommonSection } from "../../components/UI";

import { Container, Row, Col } from "reactstrap";

import "./food-details.css";

const FoodDetails = () => {
  const [tab, setTab] = useState("desc");
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const [perViewImg, setPerViewImg] = useState(product.image01);

  const {title ,image01 , image02 ,image03 ,price ,category ,desc} = product
  return (
    <Helmet title={`Product-details`}>
      <CommonSection title={"product 01"} />

      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images">
                <div className="img__item mb-3" onClick={() => setPerViewImg(image01)}>
                  <img src={image01} alt="" className="w-50" />
                </div>
                <div className="img__item  mb-3" onClick={() => setPerViewImg(image02)}>
                  <img src={image02} alt="" className="w-50" />
                </div>
                <div className="img__item mb-3" onClick={() => setPerViewImg(image03)}>
                  <img src={image03} alt="" className="w-50" />
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={perViewImg} alt="" className="w-100" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <p className="product__price">
                  Price: <span>$ {price}</span>{" "}
                </p>
                <p className="category mb-5">
                  Category : <span>{category}</span>{" "}
                </p>

                <button className="addToCart__btn">Add to Cart</button>
              </div>
            </Col>

            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-3 ">
                <h6 className="tabs__active">Descriptions</h6>
                <h6>Review</h6>
              </div>

              <div className="tab__content">
                <p>
                  {desc}
                </p>
              </div>

              <div className="tab_form mb-3">
                <div className="review">
                  <p className="user__name mb-0">Gholamreza Tabrizi</p>
                  <p className="user__email">
                    gholamreza.hassanzade.1994@gmail.com
                  </p>
                  <p className="feedback__text">great product</p>
                </div>
                <div className="review">
                  <p className="user__name mb-0">Gholamreza Tabrizi</p>
                  <p className="user__email">
                    gholamreza.hassanzade.1994@gmail.com
                  </p>
                  <p className="feedback__text">great product</p>
                </div>

                <div className="review">
                  <p className="user__name mb-0">Gholamreza Tabrizi</p>
                  <p className="user__email">
                    gholamreza.hassanzade.1994@gmail.com
                  </p>
                  <p className="feedback__text">great product</p>
                </div>
                <form className="form">
                  <div className="form__group">
                    <input type="text" placeholder="Please Enter Name" />
                  </div>

                  <div className="form__group">
                    <input type="text" placeholder="Please Enter Name" />
                  </div>

                  <div className="form__group">
                    <textarea rows={5}></textarea>
                  </div>

                  <button type="submit" className="addToCart__btn">
                    Submit
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
