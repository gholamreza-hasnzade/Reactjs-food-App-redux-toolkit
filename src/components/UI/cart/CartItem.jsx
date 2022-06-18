import React from "react";

import { ListGroupItem } from "reactstrap";
import { IMAGES } from "../../../constants/content";

import "./cart.css";

const CartItem = () => {
  return (
    <ListGroupItem>
      <div className="cart__item-info">
        <img  src={IMAGES.ProductImg_01_1} alt="product-img"/>

        <div className="cart__product-info">
            <div>
                <h6>Burger</h6>
            </div>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
