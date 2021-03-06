import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import products from "../../assets/fake-data/products";
import Helmet from "../../components/helmet/Helmet";
import { CommonSection, ProductCard } from "../../components/UI";
import { cartActions } from "../../store/shopping-cart/CartSlice";

import "./food-details.css";

const FoodDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const [perViewImg, setPerViewImg] = useState(product.image01);
  const [tab, setTab] = useState("desc");

  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMsg, setEnteredMsg] = useState("");

  const { title, image01, image02, image03, price, category, desc } = product;
  const relatedProduct = products.filter((item) => item.category === category);

  useEffect(() => {
    setPerViewImg(image01);
  }, [image01]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(enteredName, enteredEmail, enteredMsg);
  };
  return (
    <Helmet title={`Product-details-${title}`}>
      <CommonSection title={title} />
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images">
                <div
                  className="img__item mb-3"
                  onClick={() => setPerViewImg(image01)}
                >
                  <img src={image01} alt={title} className="w-50" />
                </div>
                <div
                  className="img__item  mb-3"
                  onClick={() => setPerViewImg(image02)}
                >
                  <img src={image02} alt={title} className="w-50" />
                </div>
                <div
                  className="img__item mb-3"
                  onClick={() => setPerViewImg(image03)}
                >
                  <img src={image03} alt={title} className="w-50" />
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={perViewImg} alt={title} className="w-100" />
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

                <button onClick={addItem} className="addToCart__btn">
                  Add to Cart
                </button>
              </div>
            </Col>

            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-3 ">
                <h6
                  className={`${tab === "desc" ? "tabs__active" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Descriptions
                </h6>
                <h6
                  className={`${tab === "rev" ? "tabs__active" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Review
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab_form mb-3">
                  <div className="review pt-5">
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
                  <form className="form" onSubmit={submitHandler}>
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Please Enter Name"
                        value={enteredName}
                        required
                        onChange={(e) => setEnteredName(e.target.value)}
                      />
                    </div>

                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Please Enter Email"
                        value={enteredEmail}
                        required
                        onChange={(e) => setEnteredEmail(e.target.value)}
                      />
                    </div>

                    <div className="form__group">
                      <textarea
                        rows={5}
                        onChange={(e) => setEnteredMsg(e.target.value)}
                        required
                        placeholder="Please Enter Message"
                      ></textarea>
                    </div>

                    <button type="submit" className="addToCart__btn">
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>

            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related__Product-title">You might also like</h2>
            </Col>
            {relatedProduct.map((item) => (
              <Col className="mb-4" lg="3" md="4" sm="6" xs="12" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
