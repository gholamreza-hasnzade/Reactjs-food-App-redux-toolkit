import React from "react";
import { IMAGES } from "../../../constants/content";

import { Link } from "react-router-dom";
import "./product-card.css";

const ProductCard = () => {
  return (
    <div className="product__item">
      <div className="product__img">
        <img src={IMAGES.PRODUCTIMG_01} alt="Product img" />
      </div>

      <div className="product__content">
        <h5>
          <Link to="">Burger</Link>
        </h5>
        <div>
          <span className="product__price">$24.00</span>
          <button className="addToCart__btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
