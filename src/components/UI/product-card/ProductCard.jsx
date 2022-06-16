import React from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { cartActions } from "../../../store/shopping-cart/CartSlice";

import "./product-card.css";

const ProductCard = ({ item }) => {
  const { id, title, image01, price } = item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };
  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt={title} className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className="d-flex align-items-center justify-content-between">
          <span className="product__price">${price}</span>
          <button className="addToCart__btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
