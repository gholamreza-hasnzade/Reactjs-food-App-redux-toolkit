import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import Helmet from "../../components/helmet/Helmet";
import { CommonSection } from "../../components/UI";

const Login = () => {

  const LoginNameRef = useRef();
  const LoginPasswordRef = useRef();


  const submitHandler = e => {
    e.preventDefault();
  }
  return (
    <Helmet title={"login"}>
      <CommonSection title={"Login"} />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="mx-auto text-center">
              <form action="" className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input type="email" placeholder="Email" required ref={LoginNameRef}/>
                </div>

                <div className="form__group">
                  <input type="password" placeholder="Password" required ref={LoginPasswordRef}/>
                </div>
                <button type="submit" className="addToCart__btn">
                  Login
                </button>
              </form>
              <Link to="/register">
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
