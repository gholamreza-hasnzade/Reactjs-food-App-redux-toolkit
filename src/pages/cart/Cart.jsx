import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";

import { cartActions } from "../../store/shopping-cart/CartSlice";

import { CommonSection } from "../../components/UI";
import Helmet from "../../components/helmet/Helmet";

import "./cart.css";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <Helmet title={"cart"}>
      <CommonSection title={"Your cart"} />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Your cart is Empty</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const { id, title, price, image01, quantity } = item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt={title} />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">$ {price}</td>
      <td className="text-center">{quantity} px</td>
      <td className="text-center cart__item-del" onClick={deleteItem}>
        <i className="ri-delete-bin-line"></i>
      </td>
    </tr>
  );
};
export default Cart;
