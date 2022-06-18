import React from "react";

import { ListGroupItem } from "reactstrap";
import { IMAGES } from "../../../constants/content";

import "./cart.css";

const CartItem = () => {
  return (
    <ListGroupItem className="border-0">
      <div className="cart__item-info d-flex gap-2">
        <img src={IMAGES.ProductImg_01_1} alt="product-img" />

        <div className="cart__product-info d-flex align-items-center w-100
         justify-content-between gap-4">
          <div>
            <h6 className="cart__product-title">Burger</h6>
            <p className="d-flex align-items-center gap-5 cart__product-price">
              2x <span>$24.00</span>
            </p>
            <div className="d-flex align-items-center justify-content-between increase__decrease-btn">
              <span>
                <i className="ri-add-line"></i>
              </span>
              <span>2</span>
              <span className="delete__btn">
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>
          <span>
            <i className="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
