import React from "react";
import CartItem from "./CartItem";

import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";

import { cartUiActions } from "../../../store/shopping-cart/CartUISlice";

import { useDispatch, useSelector } from "react-redux";

import "./cart.css";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close" onClick={toggleCart}>
          <span>
            <i className="ri-close-line"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">No item to the cart</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal : <span>$ {totalAmount}</span>
          </h6>
          <button>
            <Link to={"/checkout"}>Checkout</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
