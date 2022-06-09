import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

import Helmet from "../../components/helmet/Helmet";
import { Category, ProductCard } from "../../components/UI";
import { IMAGES } from "../../constants/content";
import products from "../../assets/fake-data/products";

import "./home.css";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: IMAGES.FEATUREIMG_01,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, accusantium.",
  },
  {
    title: "QSuper Dine In",
    imgUrl: IMAGES.FEATUREIMG_02,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, accusantium.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: IMAGES.FEATUREIMG_03,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, accusantium.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProduts, setAllProducts] = useState(products);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title={"Home"}>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Esay way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span>Just wait <br /> food at
                  <span> your door</span>
                </h1>

                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Natus eum velit tempore obcaecati inventore praesentium.
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button
                    type="button"
                    className="order__btn d-flex align-items-center justify-content-between"
                  >
                    Order now <i className="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn ">
                    <Link to={"/foods"}>See all foods</Link>
                  </button>
                </div>

                <div className="hero__service d-flex align-items-center  gap-4 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>
                    No shipping charge
                  </p>

                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
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

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, quod.
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, quod.
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="4" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="w-25 mb-3"
                  />
                  <h5 className="fs-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food__category d-flex justify-content-center gap-4">
                <button
                  className={`all__btn ${
                    category === "ALL" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={IMAGES.FOODCATEGORY_01} alt="" />
                  Burger
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={IMAGES.FOODCATEGORY_02} alt="" />
                  Pizza
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={IMAGES.FOODCATEGORY_03} alt="" />
                  Bread
                </button>
              </div>
            </Col>
            {allProduts &&
              allProduts?.map((item) => (
                <Col lg="3" md="4" key={item.id} className="mt-5">
                  <ProductCard item={item} />
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
