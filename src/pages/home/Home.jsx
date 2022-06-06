import React from 'react'
import { Col, Container, Row } from 'reactstrap'

import Helmet from '../../components/helmet/Helmet'

const Home = () => {
  return (
    <Helmet title={"Home"}>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">

              </div>
            </Col>

            <Col  lg="6" md="6"></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home