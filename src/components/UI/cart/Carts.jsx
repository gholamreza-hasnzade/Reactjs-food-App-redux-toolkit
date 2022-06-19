import React from "react";
import CartItem from "./CartItem";

import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";

import "./cart.css";
import { cartUiActions } from "../../../store/shopping-cart/CartUISlice";

const Carts = () => {
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(cartUiActions.toggle())
  }
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close" onClick={toggleCart}>
            <span><i className="ri-close-line"></i></span>
        </div>

        <div className="cart__item-list">
            <CartItem />
            <CartItem />
            <CartItem />

            <CartItem />
            <CartItem />
            <CartItem />

            <CartItem />
            <CartItem />
            <CartItem />
        </div>


        <div className="cart__bottom d-flex align-items-center justify-content-between">
            <h6>Subtotal : <span>$123</span></h6>
            <button>
                <Link to={"/checkout"}>Checkout</Link>
            </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
