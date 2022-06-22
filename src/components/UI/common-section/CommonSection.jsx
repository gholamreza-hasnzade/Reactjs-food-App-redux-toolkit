import React from "react";
import { Container } from "reactstrap";

import "./Commons-section.css";

const CommonSection = ({ title }) => {
  return (
    <section className="common__section">
      <Container>
        <h2>{title}</h2>
      </Container>
    </section>
  );
};

export default CommonSection;
