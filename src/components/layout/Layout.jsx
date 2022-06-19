import React from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Routers from "../../routes/Routers";
import { Cart } from "../UI";

import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUI.cartIsVisible);

  return (
    <div>
      <Header />
      {showCart && <Cart />}

      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
