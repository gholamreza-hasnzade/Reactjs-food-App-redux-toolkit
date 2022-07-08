import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import Helmet from "../../components/helmet/Helmet";
import { CommonSection } from "../../components/UI";

const Register = () => {
  const signUpNameRef = useRef();
  const signUpPasswordRef = useRef();
  const signEmailRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Helmet title={"Sign Up"}>
      <CommonSection title={"Sign Up"} />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="mx-auto text-center">
              <form action="" className="form mb-5" onSubmit={submitHandler}>
              <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    ref={signUpNameRef}
                  />
                </div>
                
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signEmailRef}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={signUpPasswordRef}
                  />
                </div>
                <button type="submit" className="addToCart__btn">
                  Sign Up
                </button>
              </form>
              <Link to="/login">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
